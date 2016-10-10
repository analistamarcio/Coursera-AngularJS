(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'src/home.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories.html',
    controller: 'CategoriesController as categControl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categID}',
    templateUrl: 'src/items.html',
    controller: 'ItemsController as itemsControl',
    resolve: {
      items: ['MenuDataService', '$stateParams',
        function (MenuDataService,$stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categID);
      }]
    }
  });
  
}

})();
