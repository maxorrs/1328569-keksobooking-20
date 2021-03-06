'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;
  var lastTimeoutId = 0;

  window.debounce = function (onTimeout) {
    if (lastTimeoutId > 0) {
      window.clearTimeout(lastTimeoutId);
    }

    lastTimeoutId = window.setTimeout(function () {
      onTimeout();
    }, DEBOUNCE_INTERVAL);
  };
})();
