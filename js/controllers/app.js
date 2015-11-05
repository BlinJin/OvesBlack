var myApp = angular.module('myApp',['ui.router' ,'jkuri.gallery']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
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
        "blindsFilter":[
            {"all" : true},
            {"badroom" : false},
            {"child" : false},
            {"kitchen" : false},
            {"living" : false},
            {"workroom" : false},
            {"other" : false}
        ]
    };
    $scope.category={};

    $http.get('./json/gallery/blinds/galleryTest.json').success(function (data) {
        $scope.category  = data;
        //alert(JSON.stringify($scope.category, null, 4));
    });


    $scope.solution2= {};
    //$scope.solution2.images = [
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 1'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 2'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 3'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 4'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 1'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 2'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 3'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 4'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 1'},
    //    {thumb: 'image/gallery/blinds/badroom/1.jpg', img: 'image/gallery/blinds/badroom/1.jpg', description: 'Image 2'}
    //];

    //$scope.solution2.images =[
    //    {
    //        "thumb": "image/gallery/blinds/badroom/1.jpg",
    //        "img": "image/gallery/blinds/badroom/1.jpg",
    //        "description": "Image"
    //    },
    //    {
    //        "thumb": "image/gallery/blinds/badroom/1.jpg",
    //        "img": "image/gallery/blinds/badroom/1.jpg",
    //        "description": "Image "
    //    },
    //    {
    //        "thumb": "image/gallery/blinds/badroom/1.jpg",
    //        "img": "image/gallery/blinds/badroom/1.jpg",
    //        "description": "Image "
    //    },
    //    {
    //        "thumb": "image/gallery/blinds/badroom/1.jpg",
    //        "img": "image/gallery/blinds/badroom/1.jpg",
    //        "description": "Image "
    //    }
    //]

    $scope.filterChange = function(param)
    {
        $scope.filter.blindsFilter.all = false;
        $scope.filter.blindsFilter.badroom = false;
        $scope.filter.blindsFilter.child = false;
        $scope.filter.blindsFilter.kitchen = false;
        $scope.filter.blindsFilter.living = false;
        $scope.filter.blindsFilter.workroom = false;
        $scope.filter.blindsFilter.other = false;

        $scope.filter.blindsFilter[param]=!$scope.filter.blindsFilter[param];
    };
    $scope.filter.blindsFilter.all = true;

    $scope.showGallery = function(param)
    {
        alert();
    };

    $http.get('./json/category.json').success(function (data) {
        $scope.navData= data;
    });


}]);