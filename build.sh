#!/bin/bash

export WORKING_DIR=`pwd`

export CYAN_COLOR=\033[46m

echo " [book build] start"

#build book
cross-env NODE_ENV=production npm run build

#copy app
git clone --depth=1 --branch=gh-pages   https://${GITHUB_TOKEN}@github.com/$TRAVIS_REPO_SLUG.git app

#remove prev book files
if [ -d $WORKING_DIR/app/book ]; then
rm -r $WORKING_DIR/app/book
echo "$CYAN_COLOR > delete dir book from app"
fi

#copy book, images and app
cp -rf $WORKING_DIR/app/. $WORKING_DIR/dest
cp -rf $WORKING_DIR/images $WORKING_DIR/dest/book

echo "$CYAN_COLOR [book build] complete"
