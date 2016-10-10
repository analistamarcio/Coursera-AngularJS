(function () {
'use strict';
angular.module('MenuData')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http', 'ApiBasePath', '$q'];
function MenuDataService($http, ApiBasePath, $q) {

  this.getAllCategories = function () {
    return $http({
      method: 'GET',
      url: (ApiBasePath + '/categories.json')
    }).then(function (response){
      return response.data;
    });

  }
  this.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: (ApiBasePath + '/menu_items.json'),
      params: {
        category:categoryShortName
      }
    }).then(function (response){
      return response.data;
    });
  }
}

})();
