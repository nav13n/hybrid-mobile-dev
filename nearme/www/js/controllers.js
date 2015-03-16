angular.module('starter.controllers', ['starter.services'])

.controller('PlacesCtrl', function($scope, Places) {
  $scope.places = Places.get();
})

.controller('PlaceDetailCtrl', function($scope, $stateParams, PlaceDetail,PlacePhoto) {
    $scope.place = PlaceDetail.get({
        placeid:$stateParams.id,
        key:'AIzaSyAn9YEgrnN_o5iLUa26oYPUnZmyX4CN6ls'
    });
    $scope.urlForImage=function(image_id){
        return PlacePhoto.getURL(image_id);
    }
});
