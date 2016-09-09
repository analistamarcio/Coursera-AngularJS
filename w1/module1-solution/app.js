(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var message = "";
  $scope.items = "";

  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }

  $scope.checkItems = function () {
    var countItems = 0;
    var item = "";

    for(var i = 0; i < $scope.items.split(",").length; i++) {
      item = $scope.items.split(",")[i].trim();
      if (item != "") {countItems++}
    };

    switch (countItems) {
      case 0:
        $scope.message = "Please enter data first."
        break;
      case 1:
      case 2:
      case 3:
        $scope.message = "Enjoy!"
        break;
      default:
        $scope.message = "Too much!"
    }
  };

}

})();
