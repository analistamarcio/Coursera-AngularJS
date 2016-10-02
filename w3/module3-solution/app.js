(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
        foundItems: '<',
        onRemove: '&'
    }
  };
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";
  menu.showErrMessage = false;
  menu.found = [];

  menu.getItems = function () {
    if (menu.searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      promise.then(function (response) {
        menu.found = response;
        menu.showErrMessage = (menu.found.length === 0);
      });
    } else {
      menu.showErrMessage = true;
      menu.found = [];
    }
  };

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
    menu.showErrMessage = (menu.found.length === 0);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var foundItems = [];

      if (searchTerm) {
        var menuListArray = result.data.menu_items;
        for (var i = 0; i < menuListArray.length; i++) {
          var itemDescription = menuListArray[i].description;
          if (itemDescription.includes(searchTerm)) {
            foundItems.push(menuListArray[i]);
          }
        }
      }

      return foundItems;
    }).catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }
}


})();
