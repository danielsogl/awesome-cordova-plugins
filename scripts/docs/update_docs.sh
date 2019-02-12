#!/bin/bash

echo "##### "
echo "##### ci/update_docs.sh"
echo "#####"


function init {
  cd ..
  SITE_PATH=$(readJsonProp "config.json" "sitePath")
  cd ..
  export IONIC_DIR=$PWD
  SITE_DIR=$IONIC_DIR/$SITE_PATH
}

function run {

  VERSION=$(readJsonProp "package.json" "version")

  # process new docs
  ./node_modules/.bin/gulp docs

  # CD in to the site dir to commit updated docs
  cd $SITE_DIR

  # Add all files to git
  git add .

  # if no changes, don't commit
  CHANGED=$(git diff-index --name-only HEAD 2>/dev/null | wc -l)
  if [ $CHANGED -eq 0 ];
  then
    echo "-- No changes detected for the following commit, docs not updated."
    echo "https://github.com/ionic-team/$CIRCLE_PROJECT_REPONAME/commit/$CIRCLE_SHA1"
  else
    git config --global user.email "hi@ionicframework.com"
    git config --global user.name "Ionitron"
    git commit -am "Automated build of native docs ionic-team/$CIRCLE_PROJECT_REPONAME@$CIRCLE_SHA1"
    # in case a different commit was pushed to ionic-site during doc/demo gen,
    # try to rebase around it before pushing
    git fetch
    git rebase

    git push origin master || :

    echo "-- Updated docs for $VERSION_NAME succesfully!"
  fi
}

source $(dirname $0)/utils.inc.sh
