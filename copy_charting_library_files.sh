#!/bin/sh
echo "Copying charting libraries"

remove_if_directory_exists() {
	if [ -d "$1" ]; then rm -Rf "$1"; fi
}

case "$1" in
	"unstable")
		BRANCH="unstable";;
	*)
		BRANCH="master";;
esac

REPOSITORY='https://neosavvy:3ae5cdeb416ae5e12d248c968fd2a657126b6370@github.com/tradingview/charting_library/'

LATEST_HASH=$(git ls-remote $REPOSITORY $BRANCH | grep -Eo '^[[:alnum:]]+')

remove_if_directory_exists "$LATEST_HASH"

git clone -q --depth 1 -b "$BRANCH" $REPOSITORY "$LATEST_HASH"

remove_if_directory_exists "public/static/charting_library"
remove_if_directory_exists "public/static/datafeeds"

mkdir -p public/static/charting_library
mkdir -p public/static/datafeeds

cp -r $LATEST_HASH/charting_library/* public/static/charting_library/
cp -r $LATEST_HASH/datafeeds/* public/static/datafeeds/

remove_if_directory_exists "$LATEST_HASH"
