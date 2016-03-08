var $songItem = $('.album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');

var setSong = function(songNumber){
                                  currentlyPlayingSongNumber= parseInt(songNumber);
                                  currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
								  return currentlyPlayingSongNumber+" "+currentSongFromAlbum.title; //return is for testing
                                  //return currentlyPlayingSongNumber;
                                  };

var getSongNumberCell = function(number) {
										  console.log(
													  "line22 setsongnumcell="
													  ,$('.song-item-number[data-song-number="'+ number+'"]').html()
													  );
										  return $('.song-item-number[data-song-number="'+ number+'"]')
                                         };



var createSongRow = function(songNumber, songName, songLength) {
																	 var template =
																	// <table class="album-view-song-list">
																		'<tr class="album-view-song-item">'
																	  + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
																	  + '  <td class="song-item-title">' + songName + '</td>'
																	  + '  <td class="song-item-duration">' + songLength + '</td>'
																	  + '</tr>'
																	  ;
																	  //</table>
																 
																	  var $row = $(template);
    																	
																 var clickHandler = function() {

																									 var songNumber = $(this).attr('data-song-number');
                                                                                                    console.log(
                                                                                                                "clickhandler-line42   currentlyplayingsongNumber="
                                                                                                                ,currentlyPlayingSongNumber
                                                                                                                ,"this="
                                                                                                                ,$(this).html()
                                                                                                                
                                                                                                                );


																									if (currentlyPlayingSongNumber !== null) { //if its not null that means there is a muner and must turn to pause icon
																								             // Revert to song number for currently playing song because user started playing new song.
																								             // var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');

                                                                                                        
																											 var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
																											 console.log("clickhandler 1st if L62="  //console.log added
																											 ,currentlyPlayingCell.html(currentlyPlayingSongNumber).html()
																														);
                                                                                                            $(this).html(playButtonTemplate);
                                                                                                      
																									 }


																									if (currentlyPlayingSongNumber !== songNumber) {
//                                                                                                       
																										 // Switch from Play -> Pause button to indicate new song is playing.
																										
																								     // currentlyPlayingSongNumber = songNumber;
																								     // currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
																										console.log("clikhnd-line69-setSong(songNumber)=",setSong(songNumber));
																										
																										updatePlayerBarSong();
																										$(this).html(pauseButtonTemplate);
                                                                                                        //$(this).html(pauseButtonTemplate);
																										console.log("click handler line74="
                                                                                                                    ,$(this).html(pauseButtonTemplate)
                                                                                                                    ,"this="
                                                                                                                    , $(this).html() )
                                                                                                        
																									} else if (currentlyPlayingSongNumber === songNumber) {
																										 // Switch from Pause -> Play button to pause currently playing song.
																										 $(this).html(pauseButtonTemplate);
																										$('.main-controls .play-pause').html(playerBarPlayButton);
																										currentlyPlayingSongNumber = null;
																										currentSongFromAlbum = null;
																									 }

																								 };

																	
																 var onHover = function(event) {
																								 var songNumberCell = $(this).find('.song-item-number');
																								 var songNumber = songNumberCell.attr('data-song-number');
																								 var $songItemNumber = parseInt($songItem.attr('data-song-number'));
                                                                                                console.log(
                                                                                                            "onhover line95  this="
                                                                                                            ,$(this).html()
                                                                                                            ,"songnum not currentplaying num="
                                                                                                            ,songNumber != currentlyPlayingSongNumber
                                                                                                            );
                                                                                                
																								if (songNumber != currentlyPlayingSongNumber) {
																									 songNumberCell.html(playButtonTemplate);
																								 }else{songNumberCell.html(pauseButtonTemplate);}
																							 };

																	
																 var offHover = function(event) {
																								 var songNumberCell = $(this).find('.song-item-number');
																								 var songNumber = songNumberCell.attr('data-song-number');
																								  var $songItemNumber = parseInt($songItem.attr('data-song-number'));
																								    console.log(
                                                                                                               "offhover songnum not curntplaysong="
                                                                                                                ,songNumber/*.toString()*/ != currentlyPlayingSongNumber
                                                                                                                );
																								if (songNumber != currentlyPlayingSongNumber) {
                                                                                                    
																									console.log("offhover-line98= "
                                                                                                                ,songNumber != currentlyPlayingSongNumber
                                                                                                                ,"songNumber="
                                                                                                                ,songNumber
																												,'currentlyPlayingSongNumber='
                                                                                                                ,currentlyPlayingSongNumber
																												,"songNumberCell.html()="
																												,songNumberCell.html()
																												,songNumber
                                                                                                                )
                                                                                                    
																									songNumberCell.html(songNumber);
																									console.log(
                                                                                                                "line107-offhover-this=",this
                                                                                                        
                                                                                                               );
																								 }
																							 };
																	
																	
																  $row.find('.song-item-number').click(clickHandler);
																  $row.hover(onHover, offHover);
																  return $row;
                                                        };


var setCurrentAlbum = function(album) {
    
										currentAlbum = album;
											 var $albumTitle = $('.album-view-title');
											 var $albumArtist = $('.album-view-artist');
											 var $albumReleaseInfo = $('.album-view-release-info');
											 var $albumImage = $('.album-cover-art');
											 var $albumSongList = $('.album-view-song-list');
											 var $songItem = $('.album-view-song-item');

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
																							var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
																							 $albumSongList.append($newRow);
																							 console.log(album.songs[i].duration);
																						 }
										};

 var trackIndex = function(album, song) {
											 return album.songs.indexOf(song);
										 };


var updatePlayerBarSong = function() {

											$('.currently-playing .song-name').text(currentSongFromAlbum.title);
											$('.currently-playing .artist-name').text(currentAlbum.artist);
											$('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
											$('.main-controls .play-pause').html(playerBarPauseButton);

										};


var nextSong = function() {
    
								var getLastSongNumber = function(index) {
									return index == 0 ? currentAlbum.songs.length : index;
								};
								
								var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
								// Note that we're _incrementing_ the song here
								currentSongIndex++;
								
								if (currentSongIndex >= currentAlbum.songs.length) {
									currentSongIndex = 0;
								}
								
								// Set a new current song
								//currentlyPlayingSongNumber = currentSongIndex + 1;
								//currentSongFromAlbum = currentAlbum.songs[currentSongIndex];
								console.log('nextSong line 213 currentSongindex=',currentSongIndex);
								setSong(currentSongIndex+1);

								// Update the Player Bar information
								$('.currently-playing .song-name').text(currentSongFromAlbum.title);
								$('.currently-playing .artist-name').text(currentAlbum.artist);
								$('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.title);
								$('.main-controls .play-pause').html(playerBarPauseButton);
								
								var lastSongNumber = getLastSongNumber(currentSongIndex);
								var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
								var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');
								
								$nextSongNumberCell.html(pauseButtonTemplate);
								$lastSongNumberCell.html(lastSongNumber);
								
							};

var previousSong = function() {
    
								// Note the difference between this implementation and the one in
								// nextSong()
								var getLastSongNumber = function(index) {
									return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
								};
								
								var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
								// Note that we're _decrementing_ the index here
								currentSongIndex--;
								
								if (currentSongIndex < 0) {
									currentSongIndex = currentAlbum.songs.length - 1;
								}
								
								// Set a new current song
								//currentlyPlayingSongNumber = currentSongIndex + 1;
								//currentSongFromAlbum = currentAlbum.songs[currentSongIndex];
								console.log('prevSong line 250 currentSongindex=',currentSongIndex);
								setSong(currentSongIndex+1);
								
								
								// Update the Player Bar information
								$('.currently-playing .song-name').text(currentSongFromAlbum.title);
								$('.currently-playing .artist-name').text(currentAlbum.artist);
								$('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.title);
								$('.main-controls .play-pause').html(playerBarPauseButton);
								
								var lastSongNumber = getLastSongNumber(currentSongIndex);
								var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
								var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');
								
								$previousSongNumberCell.html(pauseButtonTemplate);
								$lastSongNumberCell.html(lastSongNumber);
								
							};








  $(document).ready(function() {
									setCurrentAlbum(albumPicasso);
									$previousButton.click(previousSong);
									$nextButton.click(nextSong);
									
								   
									   
								   
								});



/* //example look for analizing

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21' },
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15' }
     ]
 };

*/





















