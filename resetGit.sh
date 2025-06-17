#!/bin/bash

# This script removes all local changes and untracked files,
# then pulls the latest version from the Git repository.
# USE WITH CAUTION: This will delete any uncommitted work and untracked files!

echo "WARNING: This script will remove all local changes and untracked files."
echo "         Ensure you have committed or stashed any work you want to keep."
read -p "Type 'yes' to proceed: " CONFIRM

if [[ "$CONFIRM" != "yes" ]]; then
  echo "Operation aborted by user."
  exit 1
fi

echo "--- Resetting local changes and removing untracked files ---"
# Discard all local changes in tracked files
git reset --hard
if [ $? -ne 0 ]; then
  echo "Error: git reset --hard failed. Aborting."
  exit 1
fi

# Remove all untracked files and directories
git clean -df
if [ $? -ne 0 ]; then
  echo "Error: git clean -df failed. Aborting."
  exit 1
fi

echo "--- Pulling latest changes from origin main ---"
git pull origin main
if [ $? -ne 0 ]; then
  echo "Error: git pull origin main failed. Aborting."
  exit 1
fi

echo "--- Repository successfully cleaned and updated! ---"