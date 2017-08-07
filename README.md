# gmapstlr
gmapstlr is a jQuery plugin that allows you to easily create and customize google maps.

## Features

 - Easy to use.
 - Set initial position and type of map.
 - Set google maps options.
 - Set minimum, maximum and initial zoom level.
 - Add multiple markers with custom icons, popups and titles.
 - Allows you to set a main color for your map (plus a saturation and brightness value).
 - Enable and disable a lot of featureTypes.
 
 ## Usage

You need to use the Maps API V3 Javascript from Google, you can set the sensor parameter to `true` or `false` to detect the user's location, there's no need to generate an API key:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script> 
<script type="text/javascript" src="js/map.js"></script> 
```
## Events handling

```
var latitude = 37.971421,
longitude = 23.726166,
map_zoom =15;
```

## Options
Set the main color for your map _(include saturation and brightness value)_
```
var main_color = '#2196f3',
saturation_value= -20,
brightness_value= 5;
```

Define the style for your map _(given a lot of options)_
These values determine the style of the custom map. Ex, to style the road we set:
```
var style= [ 
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
 ```
 Set google maps options </br>
 You can have a look at the complete list of the featureTypes on the [Google developer’s guide](https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyleFeatureType)
 ```
 panControl: false, 
 disableDefaultUI: false,  
 zoomControl: true, 
 zoomControlOptions: { 
 position: google.maps.ControlPosition.RIGHT_CENTER
  }, 
```
The main content of information

```
var latlng1 = new google.maps.LatLng(37.971421, 23.726166);
	var marker1 = new google.maps.Marker({
	position:latlng1, 
	map:map,
	icon: 'http://maps.google.com/mapfiles/ms/micons/blue.png'}); 
	google.maps.event.addListener(marker1, 'click',
		 function(){
		    infowindow.close();//hide the infowindow
		    infowindow.setContent("<strong>Acropolis of Athens</strong>");
		    infowindow.open(map, marker1);
	}
  ```

 
> **Note:**</br>
SASS and CSS</br>
I use SASS and   for the resources [compass](http://compass-style.org). If you don't use SASS, just use 
the .css ﬁle that you ﬁnd in the css folder also you can delete sass folder.</br>
I have integrated [Eric Meyer’s CSS reset rules](http://meyerweb.com/eric/tools/css/reset/)
