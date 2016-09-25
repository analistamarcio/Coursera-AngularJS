(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyItems = this;

  toBuyItems.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyItems.removeToBuyItem = function (itemIdex) {
    ShoppingListCheckOffService.removeToBuyItem(itemIdex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.removeBoughtList = function (itemIdex) {
    ShoppingListCheckOffService.removeBoughtList(itemIdex);
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  // To buy list
  var toBuyItems = [
    {
      name: "Cookies",
      quantity: 10
    },
    {
      name: "Chips",
      quantity: 5
    },
    {
      name: "Pepto Bismol",
      quantity: 15
    },
    {
      name: "Chocolate",
      quantity: 12
    },
    {
      name: "Peanut Butter",
      quantity: 9
    }
  ];

  // Already bought list
  var boughtItems = [];

  service.removeToBuyItem = function (itemIndex) {
    // Add bought item to Already bought list before remove from To buy list
    AddBoughtItem (toBuyItems[itemIndex].name, toBuyItems[itemIndex].quantity);
    // Remove item from To buy list
    toBuyItems.splice(itemIndex, 1);
  };

  function AddBoughtItem (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
  };

  service.removeBoughtList = function (itemIndex) {
    // Add removed item from Already bought list before put it back to the To buy list
    AddToBuyItem (boughtItems[itemIndex].name, boughtItems[itemIndex].quantity);
    // Remove item from Already bought list
    boughtItems.splice(itemIndex, 1);
  };

  function AddToBuyItem (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
