'use strict';

describe('Service: plugInfo', function () {

  // load the service's module
  beforeEach(module('whattheplugApp'));

  // instantiate service
  var plugInfo;
  beforeEach(inject(function (_plugInfo_) {
    plugInfo = _plugInfo_;
  }));

  it('should do something', function () {
    expect(!!plugInfo).toBe(true);
  });

});
