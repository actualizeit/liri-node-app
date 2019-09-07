require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

const axios = require('axios');
var moment = require('moment');


var arg2 = process.argv[2];
var arg3 = process.argv[3];

switch (arg2) {
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      spotifySearch();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      doIt();
      break;
    }

function concert() {
    axios.get("shttp://rest.bandsintown.com/artists/" + arg3 + "/events?app_id=codingbootcamp")
    .then(
        function(response) {
            for(i=0; i < response.data.length; i++){
                console.log(
                    response.data[i].venue.name + ", " +
                    response.data[i].venue.city + ", " +
                    response.data[i].venue.region + ", " +
                    moment(response.data[i].datetime).format("MM/DD/YYYY")
                )
            }
        }
    )
    .catch(function(err) {
        console.log(err);
    });
}

function spotifySearch() {
    spotify.search({ type: 'track', query: arg3 })
    .then(
        function(response) {
            for(i=0; i < response.tracks.items.length; i++){
                var artists = [];
                for(x=0; x < response.tracks.items[i].artists.length; x++){
                    artists.push(response.tracks.items[i].artists[x].name)
                }
                console.log(artists.join(", "))
                console.log(response.tracks.items[i].name)
                console.log(response.tracks.items[i].album.name)
                console.log(response.tracks.items[i].preview_url)
                console.log("-----------------------------------")
            }
    })
    .catch(function(err) {
        console.log(err);
    });
}