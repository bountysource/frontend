'use strict';

angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/people/:id', {
        templateUrl: 'pages/people/activity.html',
        controller: 'PeopleShow'
      });
  })
  .controller('PeopleShow', function ($scope, $routeParams, $api) {
    $scope.person = $api.person_get($routeParams.id);

    $scope.timeline = $api.person_timeline_get($routeParams.id).then(function(response) {
      return response;
    });
  });

