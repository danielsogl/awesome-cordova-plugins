#!/bin/bash
set -e


# readJsonProp(jsonFile, property)
# - restriction: property needs to be on an own line!
function readJsonProp {
  echo $(sed -En 's/.*"'$2'"[ ]*:[ ]*"(.*)".*/\1/p' $1)
}

VERSION=$(readJsonProp "package.json" "version")

echo "BOWERING IONIC-NATIVE VERSION $VERSION. FOR GREAT JUSTICE..."

DIR="scripts/ionic-native-bower"
rm -rf $DIR
mkdir $DIR
cp dist/ionic.native.js dist/ionic.native.min.js $DIR
cd $DIR
git init
git remote add origin git@github.com:driftyco/ionic-native-bower.git
cp ../bower.json .
git add .
git commit -m "Bower release"
git tag -f -m v$VERSION v$VERSION
git push -f --tags origin master

echo "BOWERING COMPLETED SOMEWHAT SUCCESSFULLY"
