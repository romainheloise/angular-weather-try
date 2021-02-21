(function () {
  "use strict";

  angular.module("apiTest").config([
    "$routeProvider",

    ($routeProvider) => {
      $routeProvider
        .when("/", {
          template: "<search-page></search-page>",
        })
        .when("/signup", {
          template: "<sign-up></sign-up>",
        })
        .when("/signin", {
          template: "<sign-in></sign-in>",
        })
        .otherwise("/");
    },
  ]);
})();
