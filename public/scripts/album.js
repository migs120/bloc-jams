 var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
     
 };

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
      var $row = $(template);
    
     var clickHandler = function() {
         // clickHandler logic
     };
    
      var onHover = function(event) {
         // Placeholder for function logic
     };
     var offHover = function(event) {
         // Placeholder for function logic
     };
    
    
      $row.find('.song-item-number').click(clickHandler);
      $row.hover(onHover, offHover);
      return $row;
 };


var setCurrentAlbum = function(album) {
     // #1  plain js style
//      var albumTitle = document.getElementsByClassName('album-view-title')[0];
//      var albumArtist = document.getElementsByClassName('album-view-artist')[0];
//      var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
//      var albumImage = document.getElementsByClassName('album-cover-art')[0];
//      var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  
  // jquery style
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
  
     // #2 plain js style
//      albumTitle.firstChild.nodeValue = album.name;
//      albumArtist.firstChild.nodeValue = album.artist;
//      albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
//      albumImage.setAttribute('src', album.albumArtUrl);
  
  
 //jquery style 
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     // #3  plain js
   //  albumSongList.innerHTML = '';
  //jquery style
  $albumSongList.empty();
 
     // #4
     for (i = 0; i < album.songs.length; i++) {
                 var $newRow = createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
         $albumSongList.append($newRow);
         console.log(album.songs[i].name);
     }
 };





var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var currentlyPlayingSong = null;



  $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
   

   
       
   
});
























