#!/bin/sh

set -e

echo "Move to 'BUILD_DIR'"
echo "- $BUILD_DIR"
cd $BUILD_DIR

echo "Git config"
REPO_URI="https://${GH_PAT}@github.com/${GITHUB_REPOSITORY}.git"

git init && \
git config user.name "${GITHUB_ACTOR}" && \
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com" && \
if [ -z "$(git status --porcelain)" ]; then
    echo "Nothing to commit" && \
    exit 0
fi

echo "Fetch and soft checkout"
git remote add origin $REPO_URI && \
git fetch origin && \
git reset --soft origin/$REMOTE_BRANCH

echo "Commit files"
git add . && \
git commit -m 'Deploy to GitHub Pages' && \
git push origin master && \
rm -fr .git && \
cd $GITHUB_WORKSPACE

echo "Deployed Files"
