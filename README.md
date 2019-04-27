# LIRI BOT

## Introduction

LIRI Bot is like iPhone's SIRI, but instead of using speah interpretation, it uses language intepretation to read your commands. All you need to do is type your commands into your command line (terminal) to tell LIRI what to do.\

Here are the available LIRI commands:\
   1. movie-this: Input a movie name and LIRI will seach and return details about the movie in the terminal\
   2. concert-this: Input an artist name and LIRI will search and return upcoming concert details of that artist in the terminal\
   3. spotify-this-song: Input a song name and LIRI will search and return details about that song in the terminal\
   4. do-what-it-says: Fire this command and LIRI will do whatever it says in the random.txt file\

To access LIRI Bot, always type in the following prefix in the terminal and then your command and search input:\

node index.js [command] [search input]

## Get Movie Details by Movie Name

Command: node index.js movie-this [movie name]

![Liri Movie](/images/liri-movie.png)

## Get Upcoming Concert Details by Artist Name

Command: node index.js concert-this [artist name]

![Liri Concert](/images/liri-concert.png)

## Get Song Details by Song Name

Command: node index.js spotify-this-song [song name]

![Liri Concert](/images/liri-song.png)

## Do what is in the random.txt file

Command: node index.js do-what-it-says