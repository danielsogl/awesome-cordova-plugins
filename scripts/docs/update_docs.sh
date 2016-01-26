#!/bin/bash

echo "##### "
echo "##### ci/deploy.sh"
echo "#####"


function init {
  cd ..
  SITE_PATH=$(readJsonProp "config.json" "sitePath")
  cd ..
  export IONIC_DIR=$PWD
  SITE_DIR=$IONIC_DIR/$SITE_PATH
}

function run {
  ls -al
  cd ./scripts
  ./git/clone.sh --repository="driftyco/ionic-site" \
    --directory="$SITE_DIR" \
    --branch="master"
  cd ..
  VERSION=$(readJsonProp "package.json" "version")

  # process new docs
  gulp docs

  # CD in to the site dir to commit updated docs
  cd $SITE_DIR

  CHANGES=$(git status --porcelain)

  # if no changes, don't commit
  if [[ "$CHANGES" == "" ]]; then
    ls
    echo "-- No changes detected in docs for $VERSION_NAME; docs not updated."
  else
    git config --global user.email "hi@ionicframework.com"
    git config --global user.name "Ionitron"
    git add -A
    git commit -am "Automated build of platform docs v$VERSION"
    git push origin master

    echo "-- Updated docs for $VERSION_NAME succesfully!"
  fi
}

source $(dirname $0)/../utils.sh.inc
