require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const axios = require('axios');
var moment = require('moment');
var fs = require("fs");

var arg2 = process.argv[2];
var arg3 = ""

var run = function(){
    for (var i = 3; i < process.argv.length; i++) {
        if (i > 3 && i < process.argv.length) {
            arg3 = arg3 + "+" + process.argv[i];
        } else {
            arg3 += process.argv[i];
        }
    }
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
            var output = ""
            for(i=0; i < response.data.length; i++){
                output += 
                    "\n" + response.data[i].venue.name + ", " +
                    response.data[i].venue.city + ", " +
                    response.data[i].venue.region + ", " +
                    moment(response.data[i].datetime).format("MM/DD/YYYY") +
                    "\n-----------------------------------"
            }
            console.log(output);
            write(output);
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
            var output = ""
            for(i=0; i < response.tracks.items.length; i++){
                var artists = [];
                for(x=0; x < response.tracks.items[i].artists.length; x++){
                    artists.push(response.tracks.items[i].artists[x].name)
                }
                output += 
                "\nAritst Name(s): " + artists.join(", ") +
                "\nTrack Name: " + response.tracks.items[i].name +
                "\nAlbum Name: " + response.tracks.items[i].album.name +
                "\nPreview URL (ctrl click to follow): " + response.tracks.items[i].preview_url +
                "\n-----------------------------------"
            }
            console.log(output);
            write(output);
        }
    )
    .catch(function(err) {
        console.log(err);
    });
}

function movie() {
    var output = ""
    if(arg3 === ""){
        arg3 = "Mr+Nobody"
    }
    axios.get("https://www.omdbapi.com/?t=" + arg3 + "&apikey=trilogy")
    .then(
        function(response) {
            output +=
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
            console.log(output);
            write(output);
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

function write(input){  
    toWrite = 
        "\n" + process.argv.join("\n") + 
        "\n-----------------------------------" + 
        input;
    fs.appendFile("log.txt", toWrite, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}