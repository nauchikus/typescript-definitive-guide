#!/bin/bash

export WORKING_DIR=`pwd`

export CYAN_COLOR=\033[46m

echo "\033[46m [app build] start"

#build app
npm run build

#copy old app version
git clone --depth=1 --branch=gh-pages   https://${GITHUB_TOKEN}@github.com/$TRAVIS_REPO_SLUG.git app

#copy book
cp -rf $WORKING_DIR/app/book $WORKING_DIR/dest

echo "\033[46m [app build] complete"
