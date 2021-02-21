(function () {
  "use strict";

  class FavList {
    constructor($http) {
      this.$http = $http;
      this.favoritesCities = [];
      this.apiKey = "7ae3f9b6867bf1de7cfc8884acd6a445";
    }

    fetchOne = (cityId) => {
      this.$http
        .get(
          `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${this.apiKey}`
        )
        .then((resp) => {
          this.favoritesCities.push(resp.data);
        });
    };

    addOne = (cityId) => {
      const token = localStorage.getItem("token");

      if (token) {
        this.$http
          .post("http://localhost:5000/users/fav", {
            user: token,
            city: cityId,
          })
          .then((resp) => {
            this.fetchOne(cityId);
          })
          .catch((err) => console.log(err));
      }
    };

    clear = () => {
      this.favoritesCities = [];
    };

    initialList = () => {
      const token = localStorage.getItem("token");
      if (token) {
        this.$http
          .get("http://localhost:5000/users/fav/list", {
            headers: { Authorization: "Bearer " + token },
          })
          .then((resp) => {
            resp.data.forEach((data) => {
              const { city } = data;
              this.fetchOne(city);
            });
          });
      }
    };

    deleteOne = (cityId) => {
      const token = localStorage.getItem("token");
      if (token) {
        this.$http
          .delete("http://localhost:5000/users/fav/list/" + cityId, {
            headers: { Authorization: "Bearer " + token },
          })
          .then((resp) => {
            this.favoritesCities = this.favoritesCities.filter(
              (city) => city.id !== cityId
            );
          })
          .catch((err) => console.log(err));
      }
    };
  }

  angular.module("core.favList").service("favList", FavList);
})();
