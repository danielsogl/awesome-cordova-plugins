#!/bin/bash

echo "##### "
echo "##### ci/update_docs.sh"
echo "#####"


function init {
  cd ../..
}

function run {
  # process new docs
  ./node_modules/.bin/gulp readmes

  # if no changes, don't commit
  CHANGED=$(git diff-index --name-only HEAD --)
  if [ -z "$CHANGED" ];
  then
    echo "-- No changes detected for the following commit, docs not updated."
    echo "https://github.com/ionic-team/$CIRCLE_PROJECT_REPONAME/commit/$CIRCLE_SHA1"
  else
    git config --global user.email "hi@ionicframework.com"
    git config --global user.name "Ionitron"
    git add -A
    git commit -am "Automated build of native readmes for ionic-team/$CIRCLE_PROJECT_REPONAME@$CIRCLE_SHA1"
    # in case a different commit was pushed to ionic-site during doc/demo gen,
    # try to rebase around it before pushing
    git fetch
    git rebase

    # git push origin master || :

    echo "-- Updated docs for $VERSION_NAME successfully!"
  fi
}

source $(dirname $0)/../utils.inc.sh
