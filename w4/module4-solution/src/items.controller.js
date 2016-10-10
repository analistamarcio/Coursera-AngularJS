(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController',ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
    var itemsControl = this;
    itemsControl.items = items.menu_items;
    itemsControl.category = items.category;
}

})();
