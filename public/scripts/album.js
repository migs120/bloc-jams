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

var songlistarry = [];
var rowsreset = [];

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
       songlistarry.push(template);
     return template;
 };



var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = ''; //  WORKS AS EMPTY ARRAY
 
     // #4
     for (i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += //FILL EMPTY ARRAY-    \/
          
                                  createSongRow(i + 1, album.songs[i].name, album.songs[i].length)  
     }
 };

console.log(songlistarry, 'thearray')

//pay button animation works====\/

 var songListContainer = document.getElementsByClassName('album-view-song-list')[0]; //box with all rows

 var songRows = document.getElementsByClassName('album-view-song-item'); //item is A song row


 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';



 window.onload = function() {
     setCurrentAlbum(albumPicasso);
   
   
   
   
        songListContainer //box with rows
          .addEventListener('mouseover', function(event) {
                          //var targt = this.parentElement.children[0].children[0];  //
                          var targt = event.target.parentElement.children[0].children[0]; 
          console.log(
                      Boolean(targt), "mouseover"
                   
                     );
           
          if( Boolean(targt) ){  
            
                                if(  event.target.parentElement.children[0].textContent !== "pause" ){

                                                                                                      if (event.target.parentElement.className === 'album-view-song-item') {

                                                                                                                                                                              event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
                                                                                                                                                                             }
                                                                                                      }
                          } 
          else { 
                  if (event.target.parentElement.className === 'album-view-song-item') {
                                                                                         
                                                                                          event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
                                                                                         }
                 }
     });
   
   
   
    
   
   
         songListContainer //box with rows
          .addEventListener('click', function(event) {
           
           console.log(event.target.parentElement.children[0].children[0].textContent,"click-test1");
           
          if (event.target.parentElement.className === 'album-view-song-item') {
                                                                                   var a = document.getElementsByClassName('album-view-song-list');
                                                                                    var b = document.getElementsByClassName('album-view-song-item');
                                                                                  console.log( rowsreset.push(event.target.parentElement )
                                                                                              //,document.getElementsByClassName('album-view-song-item').remove
                                                                                              ,rowsreset
                                                                                              ,b.length
                                                                                             , 'clicktest-2');
                                                                                   for(var i = 0; i <  b.length; i++){
                                                                                     b[i].remove
                                                                                   }
                                                                                   
                                                                                   for(var x = 0; x < songlistarry.length; x++){
                                                                                     a.innerHTML += songlistarry[x]
                                                                                   }
                                                                                    
                                                                                        
            
                                                                                  //setCurrentAlbum(albumPicasso);
                                                                                event.target.parentElement.querySelector('.song-item-number').innerHTML = '<a class="album-song-button">pause</a>';
                                                                               }
     }); 
  
   
   
   
   
   
   
        for (i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
           console.log( this.children[0].children[0].textContent === 'pause'
                       //, this.children[0].children[0].toString()  //strings but dosent work
                          , this.children[0].children[0].textContent, "mouseleave"
                      );
           
          
           
           if(this.children[0].children[0].textContent !== 'pause'){ 
           
              this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
           console.log(
                     event.target.parentElement.className,
                      this.children[0],"mouseleave"
             
             //!==  '<a class="album-song-button">pause</a>'
                      
                      );
           }
         });
           
         
     }
   
   
   
   
   
   
 //====--EXPARAMENT=   |
 //                   \|/
   
//         songListContainer //box with rows
//           .addEventListener('click', function(event) {
//           if (event.target.parentElement.className === 'album-view-song-item') {
//           event.target.parentElement.querySelector('.song-item-number').innerHTML = 'hay';
//          }
//      });
   
 //======--EXPARAMENT-END  
   
   
///===--EXPARAMENT2=   |
 //                   \|/
   
//          songRows[1].addEventListener('mouseleave', function(event) {
//               this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
//            console.log(event.target.parentElement.className);
//          });
   
 //======--EXPARAMENT2-END   
   
   

   console.log(
   
 songRows[0].remove()
   )
   
 };





//'<td class="song-item-number" data-song-number="1">1</td>'



//copy element
//<a class="album-song-button">pause</a>


















































