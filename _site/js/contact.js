var contact = {
	init: function () {

		if (window.location.href.indexOf('sent=true') > -1) {
			se.modal.openModal('#modal-contact-success');
		}

		var mapCanvas = document.getElementById('map');
	    var mapOptions = {
	      center: new google.maps.LatLng(51.524274, -0.107990),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP,
	      styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c2dde9"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#72ccf4"},{"color":"#8dcae5"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#72ccf4"}]}]
	    }
	    var map = new google.maps.Map(mapCanvas, mapOptions);
       
	    var marker = new google.maps.Marker({
	        position: mapOptions.center,
	        map: map,
	        icon: '../img/map-marker.png',
	        title:"Sharpend - The Agency of Things"
	    });

	    infobox = new InfoBox({
			content: '\
				<div class="map-infobox">\
					<h6 class="map-infobox__title">Our Office</h6>\
					<p class="map-infobox__body">15 Bowling Green Lane<br>London, EC1R 0BD</p>\
				</div>\
			',
			boxClass: 'map-infobox-wrapper',
			maxWidth: 150,
			overflow: 'visible',
			pixelOffset: new google.maps.Size(-90, -122),
			zIndex: null,
	        closeBoxMargin: "12px 4px 2px 2px",
	        infoBoxClearance: new google.maps.Size(1, 1)
	    });
	    
	    infobox.open(map, marker);
	}
}

$(document).ready(function(){
	contact.init();
});