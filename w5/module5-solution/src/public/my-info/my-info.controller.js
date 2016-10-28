(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'ApiPath'];
function MyInfoController(user, ApiPath) {
	var infoCtrl = this;
	infoCtrl.user = user;
	infoCtrl.basePath = ApiPath;
}


})();
