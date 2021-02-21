(function () {
  "use strict";

  angular.module("signUp").component("signUp", signUp());

  function signUp() {
    class signUpController {
      constructor($http, $location) {
        this.$http = $http;
        this.$location = $location;
        this.message = {};
      }

      onSubmit = (inputs) => {
        this.$http
          .post("http://localhost:5000/users", inputs)
          .then((resp) => {
            if (resp.status === 200) {
              this.message.success = "Bien inscrit ! ";
              this.$location.path('/')
            }
          })
          .catch((err) => {
            for (const key in err.data) {
              this.message[key] = err.data[key];           
            }
          });
      };
    }

    return {
      controller: signUpController,
      templateUrl: "/components/sign-up/sign-up.template.html",
    };
  }
})();
