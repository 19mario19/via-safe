#!/bin/bash

# Define the target directory where HTML files are generated
TARGET_DIR="public/pages"

# Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory '$TARGET_DIR' not found."
    exit 1
fi

echo "Starting replacement of 'className' with 'class' in HTML files under '$TARGET_DIR'..."

# Use find to locate all .html files and then execute sed on them
find "$TARGET_DIR" -type f -name "*.html" -exec sed -i 's/className/class/g' {} +

# Check if the find command (which invokes sed) was successful
if [ $? -eq 0 ]; then
    echo "Replacement complete! 'className' replaced with 'class' in HTML files."
else
    echo "An error occurred during the replacement process."
    echo "Please check the output above for details."
    exit 1 # Exit with an error code if the sed fails
fi
