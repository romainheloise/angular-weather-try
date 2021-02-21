(function () {
  "use strict";

  class SearchBarList {
    constructor() {
      this.cityList = [];
    }

    addCity = (city) => {
      this.cityList = [...this.cityList, city];
    };

    deleteOne = (id) => {
      this.cityList = this.cityList.filter((city) => city.id !== id);
    };
  }

  angular.module("core.searchBarList").service("searchBarList", SearchBarList);
})();
