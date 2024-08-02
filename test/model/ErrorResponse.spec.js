/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2.ErrorResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ErrorResponse', function() {
    it('should create an instance of ErrorResponse', function() {
      // uncomment below and update the code to test ErrorResponse
      //var instance = new CoboWaas2.ErrorResponse();
      //expect(instance).to.be.a(CoboWaas2.ErrorResponse);
    });

    it('should have the property error_code (base name: "error_code")', function() {
      // uncomment below and update the code to test the property error_code
      //var instance = new CoboWaas2.ErrorResponse();
      //expect(instance).to.be();
    });

    it('should have the property error_message (base name: "error_message")', function() {
      // uncomment below and update the code to test the property error_message
      //var instance = new CoboWaas2.ErrorResponse();
      //expect(instance).to.be();
    });

    it('should have the property error_id (base name: "error_id")', function() {
      // uncomment below and update the code to test the property error_id
      //var instance = new CoboWaas2.ErrorResponse();
      //expect(instance).to.be();
    });

  });

}));
