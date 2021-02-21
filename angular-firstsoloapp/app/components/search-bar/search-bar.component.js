(function () {
  "use strict";

  angular.module("searchBar").component("searchBar", searchBar());

  function searchBar() {
    class searchBarController {
      constructor($http, searchBarList) {
        this.$http = $http;
        this.apiKey = "7ae3f9b6867bf1de7cfc8884acd6a445";
        this.isDisplayed = false;
        this.searchBarList = searchBarList;
      }

     

      onSearch = (searchInput) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&lang=fr&appid=${this.apiKey}`;
        this.$http
          .get(url)
          .then((resp) => {         
            this.searchBarList.addCity(resp.data);           
          })
          .catch((err) => {
            console.log(err);
            if (err.data) this.error = err.data.message;
          });

        this.searchValue = "";
      };
    }

    return {
      controller: searchBarController,
      templateUrl: "components/search-bar/search-bar.template.html",
    };
  }
})();
