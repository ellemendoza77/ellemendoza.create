#!/bin/bash
cd "assets/Art Portfolio"

# Convert HEIC/heic to jpg
for file in *.HEIC *.heic; do
    [ -e "$file" ] || continue
    filename="${file%.*}"
    sips -s format jpeg "$file" --out "${filename}.jpg"
done

# Normalize filenames (remove spaces, lowercase extension)
for file in *; do
    # Skip directories
    [ -d "$file" ] && continue
    
    # Replace spaces with underscores
    newname="${file// /_}"
    
    if [ "$file" != "$newname" ]; then
        mv "$file" "$newname"
    fi
done

# Ensure all jpg extensions are lowercase .jpg for consistency
for file in *.JPG *.JPEG; do
    [ -e "$file" ] || continue
    filename="${file%.*}"
    mv "$file" "${filename}.jpg"
done
