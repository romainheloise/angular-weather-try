(function () {
  "use strict";

  angular.module("searchPage").component("searchPage", searchPage());

  function searchPage() {
    class searchPageController {
      constructor(searchBarList) {
        this.searchBarList = searchBarList;
      }
    }

    return {
      templateUrl: "components/search-page/search-page.template.html",
      controller: searchPageController,
    };
  }
})();
