const profiles = new Map<string, number>();

export const Logger = {
  error(...args: unknown[]) {
    console.error('[error]', ...args);
  },
  info(...args: unknown[]) {
    console.info('[info]', ...args);
  },
  verbose(...args: unknown[]) {
    console.log('[verbose]', ...args);
  },
  debug(...args: unknown[]) {
    console.debug('[debug]', ...args);
  },
  silly(...args: unknown[]) {
    console.debug('[silly]', ...args);
  },
  profile(label: string) {
    const now = performance.now();
    const start = profiles.get(label);
    if (start !== undefined) {
      const durationMs = Math.round(now - start);
      console.info(`[info] ${label} {"durationMs":${durationMs}}`);
      profiles.delete(label);
    } else {
      profiles.set(label, now);
    }
  },
};
