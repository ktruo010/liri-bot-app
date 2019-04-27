require('dotenv').config()
const axios = require('axios')
var keys = require('./keys.js')
const Spotify = require('node-spotify-api')
const spotify = new Spotify(keys.spotify)
const fs = require('fs')

const [, , order, ...input] = process.argv

const movieSearch = _ => {
  search = input.join(' ')
  axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=faed73eb&t=${search}`)
    .then(({ data }) => {
      console.log(`
        Title: ${data.Title}
        Year: ${data.Year}
        IMDB Rating: ${data.imdbRating}
        Rotten Tomatoes Rating: ${data.Ratings[2].Value}
        Production Location: ${data.Country}
        Language: ${data.Language}
        Plot: ${data.Plot}
        Actors: ${data.Actors}
        `)
    })
    .catch(error => console.log(error))
}

const concertSearch = () => {
  search = input.join('')
  axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`)
    .then(response => {
      for (let i = 0; i < response.data.length; i++) {
        let concertDateTime = response.data[i].datetime
        let concertDate = concertDateTime.slice(0, 10)
        console.log(`
                Name of Venue: ${response.data[i].venue.name}
                City: ${response.data[i].venue.city}
                Date: ${concertDate}
                `)
      }
    })
}

const spotifySearch = _ => {
  search = input.join(' ')
  spotify.search({ type: 'track', query: `${search}` }, function (err, data) {
    if (err) {
      return console.log('Error: ' + err)
    }
    for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
      console.log(`
        Artist(s): ${data.tracks.items[0].artists[i].name}
        Song Name: ${data.tracks.items[0].name}
        Preview Song: ${data.tracks.items[0].preview_url}
        Album: ${data.tracks.items[0].album.name}
        `)
    }
  })
}

const doItSearch = () => {
  fs.readFile(`randomFile.txt`, 'utf8', (error, data) => {
    if (error) {
      console.log(error)
    } else {
      newArray = data.split(',')
      console.log(newArray[0])
      console.log(newArray[1])
      search = newArray[1]
      if (newArray[0] === 'spotify-this-song') {
        spotifySearch()
      }
    }
  })
}

switch (order) {
  case 'movie-this':
    movieSearch()
    break
  case 'concert-this':
    concertSearch()
    break
  case 'spotify-this-song':
    spotifySearch()
    break
  case 'do-what-it-says':
    doItSearch()
    break
}
