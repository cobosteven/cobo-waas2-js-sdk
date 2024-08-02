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
    instance = new CoboWaas2.SourceGroup();
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

  describe('SourceGroup', function() {
    it('should create an instance of SourceGroup', function() {
      // uncomment below and update the code to test SourceGroup
      //var instance = new CoboWaas2.SourceGroup();
      //expect(instance).to.be.a(CoboWaas2.SourceGroup);
    });

    it('should have the property key_share_holder_group_id (base name: "key_share_holder_group_id")', function() {
      // uncomment below and update the code to test the property key_share_holder_group_id
      //var instance = new CoboWaas2.SourceGroup();
      //expect(instance).to.be();
    });

    it('should have the property tss_node_ids (base name: "tss_node_ids")', function() {
      // uncomment below and update the code to test the property tss_node_ids
      //var instance = new CoboWaas2.SourceGroup();
      //expect(instance).to.be();
    });

  });

}));
