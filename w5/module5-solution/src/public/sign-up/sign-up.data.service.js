(function () {
"use strict";

angular.module('common')
.service('SignUpFormData', SignUpFormData);

SignUpFormData.$inject = ['$http', 'ApiPath'];
function SignUpFormData($http, ApiPath) {
	var service = this;
	service.response = {};
	service.user = {};

	service.userSave = function (user) {
		service.user = user;
	}

	service.userInfo = function () {
		return service.user;
	}

	service.checkDish = function (short_name) {
    	return $http.get(ApiPath + 'menu_items/' + short_name + '.json')
    	.then(function (response) {
    		service.response = response;
      		return service.response.data;
    	})
    	.catch(function (response) {
     		service.response = response;
   			return service.response;
    	});
	};
}

})();
