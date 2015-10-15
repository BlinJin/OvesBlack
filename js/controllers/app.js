var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/about");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "pages/main.html",
            controller:"MainController"
        })
        .state('about', {
            url: "/about",
            templateUrl: "pages/about.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('event', {
            url: "/event",
            templateUrl: "pages/events.html"
        })
        .state('gallery', {
            url: "/gallery",
            templateUrl: "pages/gallery.html"
        })
        .state('contacts', {
            url: "/contacts",
            templateUrl: "pages/contacts.html"
        })
        .state('calldesign', {
        url: "/calldesign",
        templateUrl: "pages/backform.html"
        });
});


myApp.controller('GreetingController', ['$scope', '$http',  function($scope, $http) {
    $scope.greeting = 'Hola!';
    $scope.whitebg = "black";
    $http.get('./json/mainpage.json').success(function (data) {
        $scope.mainPageData= data;
    }).
        error(function () {

        });


}]);


myApp.controller('MainController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.state = $state;
    $scope.whitebg = "whitebg";
    $http.get('./json/category.json').success(function (data) {
        $scope.navData= data;
    }).
        error(function () {

        });


}]);