(function () {
  "use strict";

  angular.module("favBar").component("favBar", favBar());

  function favBar() {
    class favBarController {
      constructor(favList) {
        this.favList = favList;
        this.isDisplayed = true;
      }

      $onInit = () => {
        this.favList.initialList();
      };

      logOut = () => {
        localStorage.clear();
        this.favList.clear();
      };
    }

    return {
      controller: favBarController,
      templateUrl: "components/fav-bar/fav-bar.template.html",
    };
  }
})();
