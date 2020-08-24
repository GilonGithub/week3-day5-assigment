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

    let songID = this.generateUid();

    console.log(songID);

    library['songs'][songID] = {

      id: songID,
      name: name,
      artist: artist,
      album: album
    };

    console.log(this['songs'][songID]);
  },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.

    library['playlists'][playlistID]['tracks'].push(songID);

    console.log(library['playlists'][playlistID]);
    

  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.

    let playlistID = this.generateUid();

    library['playlists'][playlistID] = {

      id: playlistID,
      name: name,
      tracks: arrOfSongs
    }

    //console.log(library['playlists'][playlistID]);
    console.log(library.playlists[playlistID]);
    //console.log(library['playlists'][playlistID]['tracks']);

  },


}



//console.log(Object.keys(library.playlists));

//library.addSongToPlaylist('s01', 'p02');

// console.log(library.songs);

//library.printAllSongNames();

//library.printSongName("s01");

//library.printPlaylistName("p02");

//library.printAllPlaylistNames();

//library.printPlaylistSongs("p01");

//library.addSong("New Song", "New Artist", "New Album");

//library.addSongToPlaylist("s02", "p01");

library.addPlaylist("New Playlist", ["s01","s02","s03"]);





//SOLUTION BY AIDAN

// let library = {

//   songs: { s01: { id: "s01",
//                    name: "Money",
//                    artist: "Pink Floyd",
//                    album: "Dark Side of the Moon" },
//             s02: { id: "s02",
//                    name: "Blessings",
//                    artist: "Chance, The Rapper",
//                    album: "Colouring Book"},
//             s03: { id: "s03",
//                    name: "Purple Haze",
//                    artist: "Jimi Hendrix",
//                    album: "Are You Experienced"},
//             s04: { id: "s04",
//                    name: "Little Wing",
//                    artist: "Jimi Hendrix",
//                    album: "Are You Experienced"},
//           },


//   playlists: { p01: { id: "p01",
//                       name: "Coding Jamz",
//                       tracks: ["s01", "s03"]
//                     },
//                p02: { id: "p02",
//                       name: "Music to cry to",
//                       tracks: ["s02"]
//                     }
//              },


//   generateUid: function() {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   },

//   printSongName: function(songID) {
//     // console.log(library.songs[songID].name)
//     console.log(library.songs[songID].name)
//   },

//   printAllSongNames: function() {
//     let songIDs = Object.keys(library.songs)

//     for (i = 0; i < songIDs.length; i++) {
//       console.log(library.songs[songIDs[i]].name)
//     }

//   },

//   printPlaylistName: function(playlistID) {
//     console.log(library.playlists[playlistID].name)
//   },

//   printAllPlaylistNames: function() {
//     let playlistIDs = Object.keys(library.playlists)

//     for (i = 0; i < playlistIDs.length; i++) {
//       this.printPlaylistName(playlistIDs[i])
//     }

//   },


//   printPlaylistSongs: function(playlistID) {
//     let playlistSongs = library.playlists[playlistID].tracks;
//     console.log(playlistSongs);

//     for (i = 0; i < playlistSongs.length; i++) {
//       library.printSongName(playlistSongs[i])
//     }
//   },

//   addSong: function(songName, songArtist, songAlbum) {
//     let newSong = {
//       id: library.generateUid(),
//       name: songName,
//       artist: songArtist,
//       album: songAlbum
//     }

//     library.songs[newSong.id] = newSong;

//     console.log(library.songs)

//   },

//   addSongToPlaylist: function(songID, playlistID) {
//     this.printPlaylistSongs(playlistID)
//     library.playlists[playlistID].tracks.push(songID)
//     this.printPlaylistSongs(playlistID)
//   },

//   addPlaylist: function(playlistName, arrOfSongs) {
//     let newPlaylist = {
//       id: library.generateUid,
//       name: playlistName,
//       tracks: arrOfSongs
//     }

//     library.playlists[newPlaylist.id] = newPlaylist;

//     this.printAllPlaylistNames();


//   },





// }

// // library.printAllSongNames()

// // console.log(Object.keys(library.songs.s01))

// // library.addSongToPlaylist('s02', 'p02');

// // console.log(library.songs);

// // console.log(Object.keys(library.songs.s01))

// // console.log(library.songs.s01.name)

// // library.printAllSongNames()

// // library.addSong("Blue World", "Mac Miller", "Circles");

// // library.addPlaylist('Skiing Tunes', ['s01', 's03', 's04'])

// // console.log(library.generateUid())