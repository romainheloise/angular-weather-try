(function () {
  "use strict";

  angular.module("cityCard").component("cityCard", cityCard());

  function cityCard() {
    class cityCardController {
      constructor(searchBarList, favList) {
        this.favList = favList;
        this.searchBarList = searchBarList;
      }

      addToFav = (id) => {
        this.favList.addOne(id);
      };

      deleteOne = (index) => {
        this.searchBarList.deleteOne(index);
      };

      // $onInit = () => {
      //   console.log(this.city);
      // };
    }

    return {
      bindings: {
        city: "<",
      },
      templateUrl: "components/city-card/city-card.template.html",
      controller: cityCardController,
    };
  }
})();
