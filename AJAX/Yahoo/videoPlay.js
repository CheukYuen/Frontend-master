// <script scr ='http://cdn.com/videoplayer.js'></script>





var Video = (function(){
	var instance;

	function init(){
		var loadScript = true;
		instance = new Promise(function (resolve, reject) {
			if (loadScript) {

			}
        });

	}

	return function() {
		if (!instance) {

		}
	}

})();

window.prototype.Video = Video;

