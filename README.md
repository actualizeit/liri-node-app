# Hi, I'm Liri, and I don't violate any trademarks!

## Getting Started

Liri can do all kinds of fun stuff like search Spotify for songs, Bands in Town for concerts, and OMDB for movies, all through an oh-so-convenient command line interface.

Open terminal within the file containing liri.js and use the "node" command and the name of the file ("liri.js") to run commands.

Available commands are:
concert-this (Searches for concerts, returns )
spotify-this-song (Searches for songs, returns Artist Name(s), Track Name, Album Name, and a Preview URL)
movie-this (Searches for a movie, returns Title, Year of Release, IMDB Rating, RottenTomatoes Rating, Country of Production, Plot, and Actors)
do-what-it-says (Searches any of the above based on the text in another file, random.txt)

In all cases, the command will be paired with the next argument to return personalized results. All arguments must be separated by a space. For example:

"node liri.js spotify-this-song Yeah" 

will return a list of songs in which the title includes "Yeah" such as the one we are all thinking about that features Ludacris and is awesome and a bunch of other random dumb ones.

### How it Works

This app takes inputs via arguments on the command line and feeds them into APIs to deliver relevant content to the user. It then outputs this content to the terminal and to a text file called, appropriately, log.txt. What more can you ask for really? Some videos of it in action you say? Well ask no more!

[Main Fuctionality](https://drive.google.com/file/d/1oth7SU33cNWVWYFW8QMSTTbuFdPTsnF2/view)

[The part where I show you I fixed something I broke in the first part] (https://drive.google.com/file/d/1E2s_IikH0ssM1LrD00ww93RkT_ZE5fKB/view)

### Prerequisites

This is a node app, so you'll need [node](https://nodejs.org/en/), obvi. You'll also need to install the other npm packages as discussed below.

### Installing

In addition to node, you'll need the packages and versions needed to run the application are contained in the package.json file, as was the way of the time.
Just run npm install in the terminal window to install em all.

## Running the tests

Try stuff, go wild. Let me know what happens.

## Built With

* [VSCode](https://code.visualstudio.com/) - Makes my words different colors and looks impressive to noncoders. 10/10
* [JavaScript](https://www.javascript.com/) - I too hate semicolons
* [node](https://nodejs.org/en/) - But I don't want to learn a new language for the back end!
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api) - Its techno bro, just loop the preview
* [Axios](https://www.npmjs.com/package/axios) - Makes my calls for me, kinda like a secretary. I must be important!
* [OMDB API](http://www.omdbapi.com) - Who's that guy from that one movie I saw that time?
* [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api) - It's gonna be lit fam
* [Moment](https://www.npmjs.com/package/moment) - No funny European dates OK!?
* [DotEnv](https://www.npmjs.com/package/dotenv) - Keep it secret, keep it safe!

## Contributing

If you'd like to buy me a beer I won't say no. I could probably be convinced to listen to ideas you might have over said beer. If it's a good beer. Maybe.

## Versioning

Only the one version for now, but who knows what the future holds!

## Authors

* **David Bell** - *Initial work* - [ActualizeIt](https://github.com/actualizeit)

## License

This project is licensed under the MIT License. So its free and open and such. But not to take Epstein's money. No no. Not that way.

## Acknowledgments

* My dog who still has no idea what I'm doing at my desk all the time but is very patient. Who's da best?! Who is it! It's you!
