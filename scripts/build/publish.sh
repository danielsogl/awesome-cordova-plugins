CORE="./dist/packages-dist/@ionic-native/core/"
PLUGINS="./src/@ionic-native/plugins/*"
UTILS="./dist/packages-dist/@ionic-native/utils/"

BUILD_PLUGINS_DIST='dist/packages-dist/@ionic-native/plugins'

echo "Publishing @ionic-native/core"
npm publish "$CORE" --access public

echo "Publishing @ionic-native/utils"
npm publish "$UTILS" --access public

# For each plugin, replace the values in tsconfig w/ the appropriate ones for this plugin
for d in $PLUGINS ; do
  BASE=`basename $d`
  echo "Publishing @ionic-native/$BASE"
  npm publish "$BUILD_PLUGINS_DIST/$BASE/" --access public
done
