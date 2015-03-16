angular.module('starter.services', ['ngResource'])

.factory('Places', function($resource) {
    return $resource('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.984266,77.6884863&types=food&key=AIzaSyAn9YEgrnN_o5iLUa26oYPUnZmyX4CN6ls&rankby=distance');
})

.factory('PlaceDetail', function($resource) {
    return $resource('https://maps.googleapis.com/maps/api/place/details/json');
})

.factory('PlacePhoto', function() {
    return{
        getURL: function(photo_id){
            return 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+ photo_id +'&key=AIzaSyAn9YEgrnN_o5iLUa26oYPUnZmyX4CN6ls';
        }
    };
});
