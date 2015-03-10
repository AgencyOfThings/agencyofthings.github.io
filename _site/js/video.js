var video = (function(){

	return {
		init: function () {

		    $('.js-video-cover').each(function(){

		    	var cover = $(this),
		    		parent = $(this).closest('.video'),
		    		id = cover.data('video-id'),
		    		img = cover.find('.js-video-img'),
		    		iframe = cover.next('.video__iframe');

		        video.getVimeoThumb(id, img, cover);

		        cover.on('click', function() {
		        	
		        	var height = cover.height();
		        	iframe.height(height);
					parent.height(height);

					video.playVideo(id, cover, iframe);
				});

		    });

		},
		getVimeoThumb: function (id, img, cover) {
			$.getJSON(
	        'http://www.vimeo.com/api/v2/video/' + id + '.json?callback=?', 
	        {format: "json"}, function(data) {
	             img.attr('src', data[0].thumbnail_large);
	             cover.height(img.height());
	        });
		},
		playVideo: function (id, cover, iframe) {
			var src = "http://player.vimeo.com/video/" + id + "?autoplay=true";
			iframe.attr('src', src);
			setTimeout(function(){
				cover.fadeOut(200);
			},500);
		}

	};
	
})();

$(document).ready(function(){
	video.init();
});