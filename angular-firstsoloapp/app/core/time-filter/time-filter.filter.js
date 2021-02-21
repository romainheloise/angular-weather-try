(function () {
  "use strict";

  angular.module("core").filter("timezone", () => {
    return (timezone) => {
      const date = new Date();
      const localTimezone = date.getTimezoneOffset() * -60;
      const hourDifFromUtc = (localTimezone + timezone) / 60 / 60;
      const UtcHour = date.getUTCHours();
      const finalHour = UtcHour + hourDifFromUtc - 1;
      const minutes = date.getMinutes();
      const result = `${finalHour}:${minutes}`;
      return result;
    };
  });
})();
