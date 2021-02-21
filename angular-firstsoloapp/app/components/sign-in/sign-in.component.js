(function () {
  "use strict";

  angular.module("signIn").component("signIn", signIn());

  function signIn() {
    class signInController {
      constructor($http, $location) {
        this.$http = $http;
        this.$location = $location;
      }

      submit = (inputs) => {
        this.$http
          .post("http://localhost:5000/users/login", inputs)
          .then((resp) => {
            localStorage.setItem("token", resp.data.accesToken);
            this.$location.path("/");
          })
          .catch((err) => {
            this.message = "probleme";
          });
      };
    }

    return {
      controller: signInController,
      templateUrl: "components/sign-in/sign-in.template.html",
    };
  }
})();
