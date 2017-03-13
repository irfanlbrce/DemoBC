(function() {
  'use strict';

  angular
    .module('demoBc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
