#!/usr/bin/env bash
# One-time (and after adding new plugins) bulk setup of npm trusted publishers.
# Run locally after `npm login` — `npm trust` needs interactive 2FA and cannot run in CI.
#
#   ./scripts/tasks/trust-packages.sh          # 4 parallel workers
#   JOBS=8 ./scripts/tasks/trust-packages.sh   # more, at the risk of rate limiting
#
# npm has no multi-package call, so this loops. The first package runs on its own to
# trigger the browser 2FA prompt — tick "skip 2FA for the next 5 minutes" there. That
# window is server-side, so the parallel batch afterwards runs unattended inside it.
# Parallelism is what keeps the whole set inside a single window instead of ~4.
#
# A trust call is ~2s, so JOBS=4 is ~2 req/s — 4x npm's serial guidance, and the
# reason there is no extra sleep here. If npm rate-limits, the affected packages
# just land in the failed list and the next run picks them up.
#
# Packages that already have a trust config come back as E409 — npm only ever creates,
# there is no update path — so those are treated as done. To actually *change* a config,
# revoke it first: npm trust list <pkg> && npm trust revoke <pkg> --id=<id>, then re-run.
#
# Progress is recorded in .npm-trust-done; re-running resumes where it stopped.
# Packages must already exist on npm; a brand new plugin publishes via NPM_TOKEN
# on its first release, then gets its trust config here.
set -euo pipefail

REPO=danielsogl/awesome-cordova-plugins
WORKFLOW=release-please.yml
JOBS="${JOBS:-4}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SELF="$ROOT/scripts/tasks/trust-packages.sh"
DONE="$ROOT/.npm-trust-done"

create() {
  npm trust github "$1" --file "$WORKFLOW" --repo "$REPO" --allow-publish --yes
}

trust_one() {
  local pkg="$1" err rc=0
  err=$(mktemp)
  # stderr is buffered so E409 can be detected; stdout flows through untouched,
  # otherwise npm's "Press ENTER to open in the browser" prompt would be invisible
  create "$pkg" 2>"$err" || rc=$?

  if [ "$rc" -eq 0 ]; then
    # single short line + O_APPEND is atomic, so parallel workers can't interleave
    echo "$pkg" >> "$DONE"
  elif grep -q "E409" "$err"; then
    # already has a trust config; npm only ever creates, so this is a no-op, not a failure
    echo ">> $pkg already configured, skipping" >&2
    echo "$pkg" >> "$DONE"
    rc=0
  else
    cat "$err" >&2
  fi

  rm -f "$err"
  return "$rc"
}

# re-entry point for xargs workers
if [ "${1:-}" = "--one" ]; then
  trust_one "$2"
  exit
fi

packages=(core)
for dir in "$ROOT"/src/@awesome-cordova-plugins/plugins/*/; do
  packages+=("$(basename "$dir")")
done

touch "$DONE"
todo=()
for name in "${packages[@]}"; do
  pkg="@awesome-cordova-plugins/$name"
  grep -qxF "$pkg" "$DONE" || todo+=("$pkg")
done

if [ ${#todo[@]} -eq 0 ]; then
  echo "All ${#packages[@]} packages already configured."
  exit 0
fi

echo "${#todo[@]} of ${#packages[@]} packages left for $REPO/.github/workflows/$WORKFLOW"
echo
echo ">> ${todo[0]} runs first. Approve in the browser and tick"
echo ">> \"skip 2FA for the next 5 minutes\" — the rest then runs unattended."
echo
trust_one "${todo[0]}" || true

if [ ${#todo[@]} -gt 1 ]; then
  echo
  echo "Configuring the remaining $((${#todo[@]} - 1)) with $JOBS parallel workers..."
  printf '%s\n' "${todo[@]:1}" | xargs -P "$JOBS" -n1 "$SELF" --one || true
fi

failed=()
for pkg in "${todo[@]}"; do
  grep -qxF "$pkg" "$DONE" || failed+=("$pkg")
done

if [ ${#failed[@]} -gt 0 ]; then
  echo
  printf 'failed: %s\n' "${failed[@]}"
  echo
  echo "An expired 2FA window is the usual cause — re-run and approve again."
  echo "Re-run retries only the failures; successes are recorded in $DONE."
  exit 1
fi
echo "Done."
