(function () {
  "use strict";

  class SignUp {
    constructor() {
      this.logged = false;
    }

    successLog = () => {
      this.logged = true;
    };

    failedLog = () => {
      this.logged = false;
    };
  }

  angular.module("core.signup").service("signup", SignUp);
})();
