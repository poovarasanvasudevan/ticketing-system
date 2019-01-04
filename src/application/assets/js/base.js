var myApp = angular.module('tapp', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{#');
    $interpolateProvider.endSymbol('#}');
});

myApp.controller('tcontroller', function ($scope) {

});