(function () {
  "use strict";

  angular.module("core").filter("temp", () => {
    return (kelvin) => {
      const longTemp = kelvin - 273.15;
      return longTemp.toFixed(1);
    };
  });
})();
