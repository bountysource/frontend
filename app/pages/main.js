'use strict';

angular.module('app')
  .controller('MainController', function ($scope, $location, $rootScope) {
    $rootScope.$on('$viewContentLoaded', function() {
      $scope.no_container = $location.path() === '/';
    });

    // change page title on change route
    $rootScope.$on('$routeChangeStart', function (event, current) {
      if (!current.$$route) {
        $rootScope.pageTitle = 'Page Not Found';
      } else if (current.$$route.title) {
        $rootScope.pageTitle = current.$$route.title;
      } else {
        $rootScope.pageTitle = null;
      }
    });

    $rootScope.$watch('pageTitle', function() {
      var parts;
      if (($rootScope.pageTitle === null) || ($rootScope.pageTitle === undefined) || ($rootScope.pageTitle === false)) {
        // no page title, do nothing
        parts = [ 'Bountysource' ];
      } else if (typeof($rootScope.pageTitle) === 'string') {
        // string page title, append
        parts = [ $rootScope.pageTitle ];
      } else {
        // array page title, slice
        parts = $rootScope.pageTitle.slice(0);
      }
      $rootScope.pageTitleFull = parts.join(' - ');
    });

  });
