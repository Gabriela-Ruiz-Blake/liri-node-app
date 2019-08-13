//requirements
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var keys = require("./keys");

var axios = require("axios");

var moment = require("moment");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

//functions

// couldn't get API key for BandsinTown so I did what I could
/* var SearchBandsintown = function(artist) {
  var queryURL =
    "";
  axios.get(queryURL).then(function(response) {
    var jsonData = response.data;
    console.log("Concerts for " + artist + ":");
    for (var i = 0; i < jsonData.length; i++) {
      var show = jsonData[i];
      console.log(
        venue name +
          ":" +
          city +
          "," +
          state +
          "," +
          country +
          " at " +
         date and time 
      );
    }
  });
}; */

var searchSpotify = function(song) {
  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(error, data) {
      if (error) {
        console.log(error);
        return;
      }

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};

var SearchOMDB = function(movie) {
  var urlHit =
    "http://www.omdbapi.com/?t=" +
    movie +
    "&y=&plot=full&tomatoes=true&apikey=308a470e";

  axios.get(urlHit).then(function(response) {
    var jsonData = response.data;

    console.log("Title: " + jsonData.Title);
    console.log("Year: " + jsonData.Year);
    console.log("IMDB Rating: " + jsonData.imdbRating);
    console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
    console.log("Country: " + jsonData.Country);
    console.log("Language: " + jsonData.Language);
    console.log("Plot: " + jsonData.Plot);
    console.log("Actors: " + jsonData.Actors);
  });
};

var doWhatItSays = function() {
    fs.readFile("random.txt", function(error, data) {
      console.log(data);
  
      var array = data.split(",");
  
      if (array.length === 2) {
        pick(array[0], array[1]);
      } else if (array.length === 1) {
        pick(array[0]);
      }
    });
  };
