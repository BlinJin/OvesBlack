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
        .state('textile', {
            url: "/textile",
            templateUrl: "pages/textile.html",
            controller:"GalleryControllerTextile"
        })
        .state('gallery-blind', {
            url: "/gallery-blind",
            templateUrl: "pages/gallery-blind.html",
            controller:"GalleryControllerBlinds"
        })
        .state('wallpaper', {
            url: "/wallpaper",
            templateUrl: "pages/wallpaper.html",
            controller:"GalleryControllerWallpaper"
        })
        .state('gallery-fire', {
            url: "/gallery-fire",
            templateUrl: "pages/gallery-fire.html",
            controller:"GalleryControllerFire"
        })
        .state('contacts', {
            url: "/contacts",
            templateUrl: "pages/contacts.html"
        });
});


myApp.controller('GreetingController', ['$scope', '$http',  function($scope, $http) {
    $scope.whitebg = "black";

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



myApp.controller('GalleryControllerBlinds', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.state = $state;
    $scope.filter = {
        "blindsFilter":[
            {"all" : true},
            {"badroom" : false},
            {"child" : false},
            {"kitchen" : false},
            {"living" : false},
            {"cabinet" : false},
            {"other" : false}
        ]
    };
    $scope.category={};
    $scope.categoryFire={};

    $http.get('./json/gallery/blinds/gallery_blinds.json').success(function (data) {
        $scope.category  = data;
    });

    $scope.filterChange = function(param)
    {
        if (param == 'all')
        {
            $scope.filter.blindsFilter.all = true;
            $scope.filter.blindsFilter.badroom = true;
            $scope.filter.blindsFilter.child = true;
            $scope.filter.blindsFilter.kitchen = true;
            $scope.filter.blindsFilter.living = true;
            $scope.filter.blindsFilter.cabinet = true;
            $scope.filter.blindsFilter.other = true;
        }
        else {
            $scope.filter.blindsFilter.all = false;
            $scope.filter.blindsFilter.badroom = false;
            $scope.filter.blindsFilter.child = false;
            $scope.filter.blindsFilter.kitchen = false;
            $scope.filter.blindsFilter.living = false;
            $scope.filter.blindsFilter.cabinet = false;
            $scope.filter.blindsFilter.other = false;
            $scope.filter.blindsFilter[param] = !$scope.filter.blindsFilter[param];
        }
    };
    $scope.filter.blindsFilter.all = true;
    $scope.filter.blindsFilter.badroom = true;
    $scope.filter.blindsFilter.child = true;
    $scope.filter.blindsFilter.kitchen = true;
    $scope.filter.blindsFilter.living = true;
    $scope.filter.blindsFilter.cabinet = true;
    $scope.filter.blindsFilter.other = true;


    $scope.filterCategory = function(category)
    {
        return $scope.filter.blindsFilter[category];
    };

    $http.get('./json/category.json').success(function (data) {
        $scope.navData= data;
    });
}]);

myApp.controller('GalleryControllerFire', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.state = $state;
    $scope.filter = {
        "fireFilter":[
            {"all" : true},
            {"electrofire" : false},
            {"biofire" : false},
            {"portals" : false}
        ]
    };
    $scope.categoryFire={};
    $http.get('./json/gallery/fire/gallery_fire.json').success(function (data) {
        $scope.categoryFire  = data;
        //alert(JSON.stringify($scope.categoryFire, null, 4));
    });

    $scope.filterChange = function(param)
    {
        if (param == 'all')
        {
            $scope.filter.fireFilter.all = true;
            $scope.filter.fireFilter.electrofire = true;
            $scope.filter.fireFilter.biofire = true;
            $scope.filter.fireFilter.portals = true;
        }
        else {
            $scope.filter.fireFilter.all = false;
            $scope.filter.fireFilter.electrofire = false;
            $scope.filter.fireFilter.biofire = false;
            $scope.filter.fireFilter.portals = false;
            $scope.filter.fireFilter[param] = !$scope.filter.fireFilter[param];
        }
    };
    $scope.filterChange('all');

    $scope.filterCategory = function(category)
    {
        return $scope.filter.fireFilter[category];
    };

    $http.get('./json/category.json').success(function (data) {
        $scope.navData= data;
    });


}]);

myApp.controller('GalleryControllerWallpaper', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.state = $state;
    $scope.filter = {
        "wallpaperFilter":[
            {"all" : true},
            {"child" : false},
            {"flower" : false},
            {"geometry" : false},
            {"modern" : false},
            {"other" : false},
            {"classic" : false}
        ]
    };
    $scope.categoryWallpaper={};
    $http.get('./json/gallery/wallpaper/gallery_wallpaper.json').success(function (data) {
        $scope.categoryWallpaper  = data;
        //alert(JSON.stringify($scope.categoryWallpaper, null, 4));
    });

    $scope.filterChange = function(param)
    {
        if (param == 'all')
        {
            $scope.filter.wallpaperFilter.all = true;
            $scope.filter.wallpaperFilter.child = true;
            $scope.filter.wallpaperFilter.flower = true;
            $scope.filter.wallpaperFilter.geometry = true;
            $scope.filter.wallpaperFilter.modern = true;
            $scope.filter.wallpaperFilter.other = true;
            $scope.filter.wallpaperFilter.classic = true;
        }
        else {
            $scope.filter.wallpaperFilter.all = false;
            $scope.filter.wallpaperFilter.child = false;
            $scope.filter.wallpaperFilter.flower = false;
            $scope.filter.wallpaperFilter.geometry = false;
            $scope.filter.wallpaperFilter.modern = false;
            $scope.filter.wallpaperFilter.other = false;
            $scope.filter.wallpaperFilter.classic = false;
            $scope.filter.wallpaperFilter[param] = !$scope.filter.wallpaperFilter[param];
        }
    };
    $scope.filterChange('all');

    $scope.filterCategory = function(category)
    {
        return $scope.filter.wallpaperFilter[category];
    };
    

}]);

myApp.controller('GalleryControllerTextile', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.state = $state;
    $scope.filter = {
        "textileFilter":[
            {"all" : true},
            {"child" : false},
            {"flower" : false},
            {"geometry" : false},
            {"modern" : false},
            {"other" : false},
            {"classic" : false}
        ]
    };
    $scope.categoryTextile={};
    $http.get('./json/gallery/textile/gallery_textile.json').success(function (data) {
        $scope.categoryTextile  = data;
        //alert(JSON.stringify($scope.categoryWallpaper, null, 4));
    });

    $scope.filterChange = function(param)
    {
        if (param == 'all')
        {
            $scope.filter.textileFilter.all = true;
            $scope.filter.textileFilter.child = true;
            $scope.filter.textileFilter.flower = true;
            $scope.filter.textileFilter.geometry = true;
            $scope.filter.textileFilter.modern = true;
            $scope.filter.textileFilter.other = true;
            $scope.filter.textileFilter.classic = true;
        }
        else {
            $scope.filter.textileFilter.all = false;
            $scope.filter.textileFilter.child = false;
            $scope.filter.textileFilter.flower = false;
            $scope.filter.textileFilter.geometry = false;
            $scope.filter.textileFilter.modern = false;
            $scope.filter.textileFilter.other = false;
            $scope.filter.textileFilter.classic = false;
            $scope.filter.textileFilter[param] = !$scope.filter.textileFilter[param];
        }
    };
    $scope.filterChange('all');

    $scope.filterCategory = function(category)
    {
        return $scope.filter.textileFilter[category];
    };


}]);

myApp.controller('BackFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.sendEmail = function()
    {
        alert("sending email");
        var obj = "Chris 2222";
        emailjs.send("yandex","yandex",
            {
                "name": obj,
                "value": 10000,
                "taxed_value": 10000 - (10000 * 0.4),
                "in_ca": true
            }
        );
    }

}]);