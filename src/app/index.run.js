(function() {
  'use strict';

  angular
    .module('oneyuga')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
