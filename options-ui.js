/**
 * This file contains logic related to the user interface options.
 */

// Get node-webkit gui.
var gui = require('nw.gui');

// Hold application state.
var app = {
	onTop: true,
	transparent: true,
	win: gui.Window.get()
};

// Get element references.
var videoIFrame = document.getElementById('videoIFrame');
var animeButton = document.getElementById('goAnime');
var ytButton = document.getElementById('goYoutube');
var repeatButton = document.getElementById('goRepeat');
var twitchButton = document.getElementById('goTwitch');
var toggleTopButton = document.getElementById('toggleTop');
var toggleTransparentButton = document.getElementById('toggleTransparent');

// Attach button click listeners.
animeButton.addEventListener('click', function (){
	videoIFrame.src = 'http://kissanime.com';
});

ytButton.addEventListener('click', function (){
	videoIFrame.src = 'https://youtube.com';
});

twitchButton.addEventListener('click', function (){
	videoIFrame.src = 'http://twitch.tv';
});

repeatButton.addEventListener('click', function (){
	var iframeWin = videoIFrame.contentWindow;
	if (iframeWin.location.origin.indexOf('youtube.com') !== -1){
		var url = iframeWin.location.href.replace('youtube', 'youtuberepeat');
		videoIFrame.src = url;	
	} else {
		videoIFrame.src = 'http://listenonrepeat.com';
	}
});

toggleTopButton.addEventListener('click', function (){
	// Toggle class.
	if (app.onTop){
		toggleTopButton.classList.remove('enabled');
	} else {
		toggleTopButton.classList.add('enabled');
	}

	// Update state.
	app.onTop = !app.onTop;
	app.win.setAlwaysOnTop(app.onTop);
});

toggleTransparentButton.addEventListener('click', function (){
	// Toggle class.
	if (app.transparent){
		toggleTransparentButton.classList.remove('enabled');
	} else {
		toggleTransparentButton.classList.add('enabled');
	}

	// Update state.
	app.transparent = !app.transparent;
	app.win.setTransparent(app.transparent);
});
