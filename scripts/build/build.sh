
VERSION=$(node -p -e "require('./package.json').version")
PLUGINS="./src/@ionic-native/plugins/*"
CORE_PACKAGE_JSON=`cat ./scripts/build/core-package.json.template`
PLUGIN_TSCONFIG=`cat ./scripts/build/tsconfig-plugin.json.template`
PLUGIN_PACKAGE_JSON=`cat ./scripts/build/plugin-package.json.template`

BUILD_TMP='.tmp'
BUILD_PLUGINS_DIST='dist/packages-dist/@ionic-native/plugins'
BUILD_CORE_DIST='dist/packages-dist/@ionic-native/core/'

# Clean the old build dir
rm -rf $BUILD_TMP
# Make it again
mkdir $BUILD_TMP


NEW_CORE_PACKAGE_JSON="$(echo "$CORE_PACKAGE_JSON" | sed "s/{{VERSION}}/$VERSION/g")"
echo "$NEW_CORE_PACKAGE_JSON" > "$BUILD_CORE_DIST/$BASE/package.json"


# For each plugin, replace the values in tsconfig w/ the appropriate ones for this plugin
for d in $PLUGINS ; do
  BASE=`basename $d`
  echo "Building plugin $BASE"
  PLUGIN_BUILD_DIR="$BUILD_TMP/plugins/$BASE"

  # Make the tmp build dir
  mkdir -p "$PLUGIN_BUILD_DIR"

  NEW_TSCONFIG="$(echo "$PLUGIN_TSCONFIG" | sed "s/{{PLUGIN}}/$BASE/g")"
  NEW_PACKAGE_JSON="$(echo "$PLUGIN_PACKAGE_JSON" | sed "s/{{PLUGIN}}/$BASE/g;s/{{VERSION}}/$VERSION/g")"
  echo "$NEW_TSCONFIG" > "$PLUGIN_BUILD_DIR/tsconfig.json"
  ./node_modules/.bin/tsc -p "$PLUGIN_BUILD_DIR/tsconfig.json"
  echo "$NEW_PACKAGE_JSON" > "$BUILD_PLUGINS_DIST/$BASE/package.json"
  exit 0
done
