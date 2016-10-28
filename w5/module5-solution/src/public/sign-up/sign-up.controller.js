(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpFormData'];
function SignUpController(SignUpFormData) {
  var signUpCtrl = this;

  signUpCtrl.firstName = "";
  signUpCtrl.lastName = "";
  signUpCtrl.email = "";
  signUpCtrl.phoneNumber = "";
  signUpCtrl.menuNumber = "";
  signUpCtrl.validDish = true;
  signUpCtrl.saved = false;

  // signUpCtrl.message = "";
  // signUpCtrl.error = "";

  signUpCtrl.submit = function () {
    var promise = SignUpFormData.checkDish(signUpCtrl.menuNumber);

    promise.then(function (response) {
      if(response.status === 500) {
        signUpCtrl.validDish = false;  
        signUpCtrl.saved = false;
      }
      else {
        signUpCtrl.prefDish = response;
        signUpCtrl.validDish = true; 
        signUpCtrl.saved = true;
        SignUpFormData.userSave(signUpCtrl);
      }
    })
    .catch(function (response) {
        console.log("Error response: ", response);
    });

  };
}

})();
