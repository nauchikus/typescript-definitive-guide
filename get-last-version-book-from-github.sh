#!/bin/bash

git clone --branch=gh-pages git@github.com:nauchikus/typescript-definitive-guide.git temporary

cp -rf temporary/book public
rm -rf temporary

echo '> load last version book from github'