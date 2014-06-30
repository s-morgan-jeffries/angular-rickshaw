'use strict';

xdescribe('Directive: ngRickshaw', function () {
  var ngRickshaw;

  // load the service's module
  beforeEach(function () {

    module('angularRickshaw', function (/*$provide*/) {
//      $provide.value('$resource', mocks.$resource);
    });
    inject(function ($injector) {
      ngRickshaw = $injector.get('ngRickshaw');
    });
  });

});