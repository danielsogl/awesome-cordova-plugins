#tsc -p tsconfig-core.json

PLUGINS="./src/@ionic-native/plugins/*"
PLUGIN_TSCONFIG=`cat ./scripts/build/tsconfig-plugin.json.template`

BUILD_TMP='.tmp'

# Clean the old build dir
rm -rf $BUILD_TMP
# Make it again
mkdir $BUILD_TMP

# For each plugin, replace the values in tsconfig w/ the appropriate ones for this plugin
for d in $PLUGINS ; do
  BASE=`basename $d`
  PLUGIN_BUILD_DIR="$BUILD_TMP/plugins/$BASE"
  mkdir -p "$PLUGIN_BUILD_DIR"
  NEW_TSCONFIG="$(echo "$PLUGIN_TSCONFIG" | sed "s/{{PLUGIN}}/$BASE/g")"
  echo "$NEW_TSCONFIG" > "$PLUGIN_BUILD_DIR/tsconfig.json"
  ./node_modules/.bin/tsc -p "$PLUGIN_BUILD_DIR/tsconfig.json"
done
