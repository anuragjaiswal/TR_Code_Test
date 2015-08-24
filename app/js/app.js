'use strict';
var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope','$http',function($scope,$http){
	$http.get('data/hotels.json').success(function(data) {
	$scope.hotels = data;
	$scope.orderProp = '-Stars';
});
}]);