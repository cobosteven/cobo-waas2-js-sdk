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
    instance = new CoboWaas2.WebhookEvent();
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

  describe('WebhookEvent', function() {
    it('should create an instance of WebhookEvent', function() {
      // uncomment below and update the code to test WebhookEvent
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be.a(CoboWaas2.WebhookEvent);
    });

    it('should have the property event_id (base name: "event_id")', function() {
      // uncomment below and update the code to test the property event_id
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

    it('should have the property created_timestamp (base name: "created_timestamp")', function() {
      // uncomment below and update the code to test the property created_timestamp
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

    it('should have the property next_retry_timestamp (base name: "next_retry_timestamp")', function() {
      // uncomment below and update the code to test the property next_retry_timestamp
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

    it('should have the property retries_left (base name: "retries_left")', function() {
      // uncomment below and update the code to test the property retries_left
      //var instance = new CoboWaas2.WebhookEvent();
      //expect(instance).to.be();
    });

  });

}));
