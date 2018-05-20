(function() {
  'use strict';

  angular
    .module('dipUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
