(function () {
  "use strict";

  angular.module("favCard").component("favCard", favCard());

  function favCard() {
    class favCardController {
      constructor(favList, searchBarList) {
        this.favList = favList;
        this.searchBarList = searchBarList;
      }

      addToMain = (city) => {
        this.searchBarList.addCity(city);
      };

      deleteOne = (index) => {
        this.favList.deleteOne(index);
      };
    }

    return {
      bindings: {
        city: "<",
      },
      controller: favCardController,
      templateUrl: "components/fav-card/fav-card.template.html",
    };
  }
})();
