
var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
        })
        .when('/old', {
            templateUrl: 'pages/old.html',
            controller: function($scope, $q) {
                $scope.team = TEAM;
                $scope.advisors = ADVISORS;
                $scope.memery = MEMERY;
            }
        })
        .when('/bank', {
            templateUrl: 'pages/bank.html',
        })
        .when('/trip', {
            templateUrl: 'pages/trip.html',
        })

        .otherwise('/')
});

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });