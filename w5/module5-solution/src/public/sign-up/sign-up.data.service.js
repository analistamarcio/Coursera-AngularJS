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
		console.log("Saving user: ", service.user);
	}

	service.userInfo = function () {
		console.log("Retrieving user: ", service.user);
		return service.user;
	}

	service.checkDish = function (short_name) {
    	return $http.get(ApiPath + 'menu_items/' + short_name + '.json')
    	.then(function (response) {
    		// console.log("http response: ", response.data)
    		service.response = response;
      		return service.response.data;
    	})
    	.catch(function (response) {
    		// console.log("http response status:", response.status);
     		service.response = response;
   			return service.response;
    	});
	};
}

})();
