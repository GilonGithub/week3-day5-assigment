let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  printAllSongNames: function() {
    // print the names of all the songs to the console

    let arrOfSongs = Object.keys(library.songs);

    for(let i = 0; i < arrOfSongs.length; i++) {

      console.log(library['songs'][arrOfSongs[i]]['name']);

    }

  },

  printSongName: function(songID) {
    // print the name of a song when given its ID

    let arrOfSongs = Object.keys(library.songs);

    for(let i = 0; i < arrOfSongs.length; i++) {

      if (library['songs'][arrOfSongs[i]]['id'] === songID) {

        console.log(library['songs'][arrOfSongs[i]]['name']);

        break;
        
      } else {

        if (i === arrOfSongs.length-1)
        {
          console.log("This song is not available in your library.");
          break;
        }

      }

    }

  },

  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID 

    let arrOfPlaylist = Object.keys(library.playlists);

    for(let i = 0; i < arrOfPlaylist.length; i++) {

      if (library['playlists'][arrOfPlaylist[i]]['id'] === playlistID) {

        console.log(library['playlists'][arrOfPlaylist[i]]['name']);
        
        break;
        
      } else {

        if (i === arrOfPlaylist.length-1)
        {
          console.log("This playlist is not available in your library.");
          break;
        }

      }

    }

  },

  printAllPlaylistNames: function() {
    // Print the nmaes of all the playlists 

    let arrOfPlaylists = Object.keys(library.playlists);

    for(let i = 0; i < arrOfPlaylists.length; i++) {

      console.log(library['playlists'][arrOfPlaylists[i]]['name']);

    }

  },


  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given

      let arrOfPlaylist = Object.keys(library.playlists);

     for (let i = 0; i < arrOfPlaylist.length; i++) {

       if (library['playlists'][arrOfPlaylist[i]]['id'] === playlistID) {

          let arrOfSongs = library['playlists'][playlistID]['tracks'];

           for (let j = 0; j < arrOfSongs.length; j++) {

            this.printSongName(arrOfSongs[j]);

           }

           break;

       } else {

            if (i === arrOfPlaylist.length-1)
            {
              console.log("This playlist is not available in your library.");
              break;
            }
          
       }
     }
  },

  addSong: function(name, artist, album) {
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.

    let id = this.generateUid();

    console.log(id);

    library['songs'][id] = {

      id: id,
      name: name,
      artist: artist,
      album: album
    }

    console.log(this['songs'][id]);
  },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.
  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.
  },





}



//console.log(Object.keys(library.playlists));

//console.log(Object.keys(library.songs).length);

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

//library.printAllSongNames();

//library.printSongName("s01");

//library.printPlaylistName("p02");

//library.printAllPlaylistNames();

//library.printPlaylistSongs("p03");

library.addSong("New Song", "New Artist", "New Album");