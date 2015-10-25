var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
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
            templateUrl: "pages/gallery.html",
            controller:"GalleryController"
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



myApp.controller('GalleryController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.state = $state;
    $scope.filter = {
        "fireFilter":[
            {"all" : false},
            {"cat1" : false},
            {"cat2" : false}
        ],
        "blindsFilter":[]
    };

    $http.get('./json/gallery/galleryFilter.json').success(function (data) {
        $scope.filter  = data;
        //alert(JSON.stringify($scope.filter, null,4));
    }).
        error(function () {

        });

    $scope.filterChange = function(param)
    {
        alert(param);
    };

    $http.get('./json/category.json').success(function (data) {
        $scope.navData= data;
    }).
        error(function () {

        });


}]);