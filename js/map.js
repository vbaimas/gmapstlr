/**
 * gmapstlr
 * @license MIT License; http://www.opensource.org/licenses/mit-license.php
 * @url http://github.com/vbaimas/gmapstlr
 * @author Vasilis Baimas
 * @version 1.0
 */

jQuery(document).ready(function($){

	//set your google maps parameters
	var latitude = 37.971421 ,
		longitude = 23.726166,
		map_zoom =15;
		

		
	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#2196f3',
		saturation_value= -20,
		brightness_value= 5;


	//we define here the style of the map
	var style= [ 
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			//don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			//don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 

		//style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},

		// show the transit stations
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		
			 {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#1976d2'}]
            },

             {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#e0e0e0'}]
            },
           
	];
		
	//set google maps options
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false, //  set as true if you want to display a pan control for panning the map
      	disableDefaultUI: false,  // 
      	zoomControl: true, // set as false if you want to disable the zoom
      	zoomControlOptions: { 
        position: google.maps.ControlPosition.RIGHT_CENTER // change the zoomControlOptions to right_center
   		 },

      	mapTypeControl: false, // set as true if you want to enable the map/satellite option
      	draggable: true, // set as false if you want't to be draggable
      	streetViewControl: false, // set as true if you want to disable the streetviewcontrol
      	streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER // change the streetViewControlOptions to right_center
    },

      	scrollwheel: false, // set as true if you want to enable mouse scroll wheel scaling 
      	styles: style, //load the style
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	 mapTypeControl: true,
   		 mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_LEFT // change the streetViewControlOptions to top_left
    },

    }
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('maps'), map_options);

	//make the map responsive 
	  google.maps.event.addDomListener(window, "resize", function() {
	  var center = map.getCenter();
	  google.maps.event.trigger(map, "resize");
	  map.setCenter(center); 
	});


	// infoWindow to the map	
	var infowindow = new google.maps.InfoWindow({
	pixelOffset: new google.maps.Size(12,21) //offset infowindow
	});	

	// First Address
	var latlng1 = new google.maps.LatLng(37.971421, 23.726166);
	var marker1 = new google.maps.Marker({
	position:latlng1, 
	map:map,
	icon: 'http://maps.google.com/mapfiles/ms/micons/blue.png'}); // icon

	google.maps.event.addListener(marker1, 'click',
		 function(){
		    infowindow.close();//hide the infowindow
		    infowindow.setContent("<strong>Acropolis of Athens</strong>");//update the content for this marker
		    infowindow.open(map, marker1);//"move" the info window to the clicked marker and open it
	}
);
});