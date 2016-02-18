(function() {
  'use strict';

  angular
    .module('oneyuga')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
