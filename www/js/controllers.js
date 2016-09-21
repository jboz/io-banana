var appid = "&appid=2843282fffda114b9dadf77190a10fe0";

angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $ionicLoading, $state) {
    $scope.search = function (city) {
      $state.go("weather", {city: city, type: "current"});
    }
  })
  .controller('WeatherCtrl', function ($scope, $stateParams, $http, $ionicLoading) {
    $ionicLoading.show({template: "Chargement ..."})
    $scope.city = $stateParams.city;
    url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $stateParams.city + "&units=metric" + appid;

    $http.get(url).success(function (response) {
      $ionicLoading.hide();
      $scope.weather = response;
    }).error(function () {
      $ionicLoading.hide();
      alert('Impossible de récupérer les informations');
    });

    $scope.expand = function (e) {
      $elem = $(e.currentTarget);
      $elem.addClass('row_active').siblings().removeClass('row_active');
    }

    $scope.Math = Math;
  })
;
