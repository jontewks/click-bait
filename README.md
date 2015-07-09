# click-bait
Removes posts containing common click-bait titles from your facebook newsfeed.

Mainly this was an exercise in going through the process of creating a chrome extension and publishing it to the chrome store. The two main files to take note of are manifest.json and clean.js. The manifest.json file sets up all the info about the extension and tells chrome what url matches to activate the js files on. In this case, it matches all facebook domains and runs the clean.js file, which takes care of locating the click bait posts and removing them.
