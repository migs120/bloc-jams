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
 
     return template;
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
                 var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].length);
         $albumSongList.append($newRow);
     }
 };

var findParentByClassName = function(element, targetClass) {
    var currentParent = element.parentElement;
    while (currentParent.className != targetClass) {
        currentParent = currentParent.parentElement;
    }
    return currentParent;
};

var getSongItem = function(element){
    
    var songEle = document.getElementsByClassName('song-item-number');
    
    console.log(songEle);
    
    console.log(element);
    
        
    console.log(element.getElementsByClassName('song-item-number '));
    
    switch (element.className) {
            
            case 'album-play-button' :
            case 'ion-play':
            case 'ion-pause':
            console.log("matched first case");
                return findParentByClassName(element,'song-item-number');
            
            break;
            
        case 'album-view-song-item':
                    console.log("matched second case");
           
            return element.querySelector('.song-item-number');
            
            break;
            
        case 'song-item-title' :
        case 'song-item-duration' :
          
            console.log("matched third case");
  return findParentByClassName(element,'album-view-song-item').querySelector('.song-item-number');
            
            break;
            
        case 'song-item-number' :
          
                        return element;
            
            break;
        default:
            return;
    }
    
};

var clickHandler = function(targetElement){
    
    var songItem = getSongItem(targetElement);
    
    if (currentlyPlayingSong === null) {
        console.log("this is where");
        console.log(songItem);
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = songItem.getAttribute('data-song-number');
    
    } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
        songItem.innerHTML = playButtonTemplate;
        currentlyPlayingSong = null;
   
    } else if ( currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
        var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
        currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = songItem.getAttribute('data-song-number');
        
    }
    
};


var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var currentlyPlayingSong = null;



 window.onload = function() {
     setCurrentAlbum(albumPicasso);
   
        songListContainer.addEventListener('mouseover', function(event) {
          if (event.target.parentElement.className === 'album-view-song-item') {
          event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         }
          
           var songItem = getSongItem(event.target);
        var songItemNumber = songItem.getAttribute('data-song-number');
          
          if(songItemNumber === currentlyPlayingSong) {
              songItem.innerHTML = pauseButtonTemplate;
          }
          
          
     });
   
        for (i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
                  var songItem = getSongItem(event.target);
                  var songItemNumber = songItem.getAttribute('data-song-number');
                   
                 if(songItemNumber !== currentlyPlayingSong) {
                   songItem.innerHTML = songItemNumber;
                     }
         });
          
           songRows[i].addEventListener('click', function(event) {
             clickHandler(event.target);
         });
          
     }
   
 };
























