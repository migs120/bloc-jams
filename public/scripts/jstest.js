var on ="on";
var off ="off";
var debug = "off";

var $songItem = $('.album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var currentSoundFile = null;
var currentVolume = 80;


var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');
var $playPauseControls = $('.main-controls .play-pause');

var setSong = function(songNumber){
								     if (currentSoundFile) {
										 currentSoundFile.stop();
									 }
                                  currentlyPlayingSongNumber= parseInt(songNumber);
                                  currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
                                  currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
                                                                                                   formats: [ 'mp3' ],
                                                                                                   preload: true
                                                                                                    });
								  setVolume(currentVolume);																
								  return currentlyPlayingSongNumber+" "+currentSongFromAlbum.title; //return is for testing
                                  //return currentlyPlayingSongNumber;
                                  };
								  
var setVolume = function(volume) {
									 if (currentSoundFile) {
										 currentSoundFile.setVolume(volume);
									 }
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
                                                                     
                                                                                                    if(debug // =="on"
                                                                                                      ){console.log(
                                                                                                                "clickhandler-line42  \n currentlyplayingsongNumber=>"
                                                                                                                ,currentlyPlayingSongNumber+''
                                                                                                                ,"\n songNumber =>"
                                                                                                                ,songNumber
																												,"\n currentSongFromAlbum.audioUrl=>"
																												,currentSongFromAlbum//.audioUrl
                                                                                                                ,"\n this.parent=>"
                                                                                                                ,"\n"+$(this).parent().html()
																												,"\n currentSoundFile =>"
																												,currentSoundFile
																												,"\n isPaused"
																												,currentSoundFile ? currentSoundFile.isPaused() :null
																											
                                                                                                                ,"\n currentlyPlayingSongNumber !== null ="
                                                                                                                ,currentlyPlayingSongNumber !== null
																											
                                                                                                                ,"\n currentlyPlayingSongNumber == songNumber ="
                                                                                                                ,currentlyPlayingSongNumber === songNumber    
																												
	                                                                                                            ,"\n currentlyPlayingSongNumber !== songNumber ="
                                                                                                                ,currentlyPlayingSongNumber !== songNumber																											
																												
                                                                                                                ); }
																												
																												
																								

																											
																									if (currentlyPlayingSongNumber !== null) { //if its not null that means there is a muner and must turn to pause icon
																								    
																											 // Revert to song number for currently playing song because user started playing new song.
																								             // var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');

                                                                                                        
																											 var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
																											 console.log("clickhandler 1st if L62="  //console.log added
																											 ,currentlyPlayingCell.html(currentlyPlayingSongNumber).html()
																														);
																											//updatePlayerBarSong();
                                                                                                           // $(this).html(playButtonTemplate);
																											output();
																									 }


																									 if( currentlyPlayingSongNumber+'' == songNumber ) 
																									{
																										 // Switch from Pause -> Play button to pause currently playing song.
																										
																								        //$(this).html(pauseButtonTemplate);
																										//$('.main-controls .play-pause').html(playerBarPlayButton);
																										//currentlyPlayingSongNumber = null;
																										//currentSongFromAlbum = null;
																										 if (currentSoundFile.isPaused()) {
																										   $(this).html(pauseButtonTemplate);
																										   $('.main-controls .play-pause').html(playerBarPauseButton);
																											currentSoundFile.play();
																										} else {
																											$(this).html(playButtonTemplate);
																											$('.main-controls .play-pause').html(playerBarPlayButton);
																											currentSoundFile.pause();   
																										}
																										output();
																										
																									 }
																									else if (currentlyPlayingSongNumber+'' !== songNumber) {  
																									//if (toString(currentlyPlayingSongNumber) !== toString(songNumber) ) { 
																										 // Switch from Play -> Pause button to indicate new song is playing.
																										
																								     // currentlyPlayingSongNumber = songNumber;
																								     // currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
																										setSong(songNumber);
																										currentSoundFile.play();
																										updatePlayerBarSong();
																										$(this).html(pauseButtonTemplate);
                                                                                                     
																										output(); 
																										}    
                                                                                                                                 

																								 };

																	
																 var onHover = function(event) {
																								 var songNumberCell = $(this).find('.song-item-number');
																								 var songNumber = songNumberCell.attr('data-song-number');
																								 var $songItemNumber = parseInt($songItem.attr('data-song-number'));
                                                                                                if(debug == "on"){console.log(
                                                                                                            "onhover line95  this="
                                                                                                            ,$(this).html()
                                                                                                            ,"songnum not currentplaying num="
                                                                                                            ,songNumber != currentlyPlayingSongNumber
                                                                                                            );}
                                                                                                
																								if (songNumber != currentlyPlayingSongNumber) {
																									 songNumberCell.html(playButtonTemplate);
																								 }else{songNumberCell.html(pauseButtonTemplate);}
																							 };

																	
																 var offHover = function(event) {
																								 var songNumberCell = $(this).find('.song-item-number');
																								 var songNumber = songNumberCell.attr('data-song-number');
																								  var $songItemNumber = parseInt($songItem.attr('data-song-number'));
																								    if(debug=="on"){console.log(
                                                                                                               "offhover songnum not curntplaysong="
                                                                                                                ,songNumber/*.toString()*/ != currentlyPlayingSongNumber
                                                                                                                );}
																								if (songNumber != currentlyPlayingSongNumber) {
                                                                                                    
																									if(debug=="on"){console.log("offhover-line98= "
                                                                                                                ,songNumber != currentlyPlayingSongNumber
                                                                                                                ,"songNumber="
                                                                                                                ,songNumber
																												,'currentlyPlayingSongNumber='
                                                                                                                ,currentlyPlayingSongNumber
																												,"songNumberCell.html()="
																												,songNumberCell.html()
																												,songNumber
                                                                                                                )}
                                                                                                    
																									songNumberCell.html(songNumber);
																									if(debug=="on"){console.log(
                                                                                                                "line107-offhover-this=",this
                                                                                                        
                                                                                                               );}
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
								currentSoundFile.play();

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
								currentSoundFile.play();
								
								
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


var togglePlayFromPlayerBar = function(){

	
	if( currentSoundFile )
	   currentSoundFile.togglePlay()
	  if($playPauseControls.html() == playerBarPlayButton ){
			$playPauseControls.html(playerBarPauseButton);
			}else{ $playPauseControls.html(playerBarPlayButton);  }
	  
	}





  $(document).ready(function() {
									setCurrentAlbum(albumPicasso);
									$previousButton.click(previousSong);
									$nextButton.click(nextSong);
									$playPauseControls.click(togglePlayFromPlayerBar);
								   
									   
								   
								});


								
								
								
var output = function(){
	
	console.log(
	"\n output"
	//,"\n currentAlbum =>"
	//,currentAlbum
	,"\n currentlyPlayingSongNumber =>"
	,currentlyPlayingSongNumber
	,"\n currentSongFromAlbum =>"
	,currentSongFromAlbum
	,"\n currentSoundFile =>"
	,currentSoundFile
	,"\n isPaused"
	,currentSoundFile.isPaused()
	,"\n currentSongFromAlbum.audioUrl=>"
	,currentSongFromAlbum.audioUrl
	//,"\n this"
	//,this
	
	
	);
	
}

/* //example look for analizing

 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
       { title: 'Blue', duration: '4:26', audioUrl: '/assets/music/blue' },
         { title: 'Green', duration: '3:14', audioUrl: '/assets/music/green' },
         { title: 'Red', duration: '5:01', audioUrl: '/assets/music/red' },
         { title: 'Pink', duration: '3:21', audioUrl: '/assets/music/pink' },
         { title: 'Magenta', duration: '2:15', audioUrl: '/assets/music/magenta' } 
     ]
 };
 
 


*/














