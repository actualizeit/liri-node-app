require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const axios = require('axios');
var moment = require('moment');
var fs = require("fs");

var arg2 = process.argv[2];
var arg3 = process.argv[3];

var run = function(){
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
}

run()

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

function movie() {
    var movieName = "";
    if(!arg3){
        movieName = "Mr+Nobody"
    }
    for (var i = 3; i < process.argv.length; i++) {
        if (i > 3 && i < process.argv.length) {
            movieName = movieName + "+" + process.argv[i];
        } else {
            movieName += process.argv[i];
        }
    }
    axios.get("https://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy")
    .then(
        function(response) {
            console.log(
                "\n-----------------------------------" +
                "\n" + response.data.Title +
                " (" + response.data.Year + ")" +
                "\nIMDB Rating: " + response.data.imdbRating + ", " +
                "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nCountry of Production: " + response.data.Country + ", " +
                "Launguages: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors: " + response.data.Actors +
                "\n-----------------------------------"
            )
        }
    )
    .catch(function(err) {
        console.log(err);
    });
}

function doIt() {
fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    arg2 = dataArr[0]
    arg3 = dataArr[1]
    run()
  })
}