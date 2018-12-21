#!/bin/bash

export WORKING_DIR=`pwd`

echo -en "\033[46m [book build] start"

#build book
npm run build

#copy app
git clone --depth=1 --branch=gh-pages   https://${GITHUB_TOKEN}@github.com/$TRAVIS_REPO_SLUG.git app

if [ -d $WORKING_DIR/app/book ]; then
rm -rv $WORKING_DIR/app/book
echo "\033[46m > delete dir book from app"
fi


cp -rf $WORKING_DIR/app/. $WORKING_DIR/dest
cp -rf $WORKING_DIR/images $WORKING_DIR/dest/book

echo -en "\033[46m [book build] complete"
