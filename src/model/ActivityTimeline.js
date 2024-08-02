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

import ApiClient from '../ApiClient';
import ActivityAction from './ActivityAction';

/**
 * The ActivityTimeline model module.
 * @module model/ActivityTimeline
 * @version 1.0.0
 */
class ActivityTimeline {
    /**
     * Constructs a new <code>ActivityTimeline</code>.
     * The timeline of the staking activity.
     * @alias module:model/ActivityTimeline
     * @param action {module:model/ActivityAction} 
     */
    constructor(action) { 
        
        ActivityTimeline.initialize(this, action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action) { 
        obj['action'] = action;
    }

    /**
     * Constructs a <code>ActivityTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityTimeline} obj Optional instance to populate.
     * @return {module:model/ActivityTimeline} The populated <code>ActivityTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityTimeline();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ActivityAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivityTimeline</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivityTimeline</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActivityTimeline.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['transaction_id'] && !(typeof data['transaction_id'] === 'string' || data['transaction_id'] instanceof String)) {
            throw new Error("Expected the field `transaction_id` to be a primitive type in the JSON string but got " + data['transaction_id']);
        }

        return true;
    }


}

ActivityTimeline.RequiredProperties = ["action"];

/**
 * @member {module:model/ActivityAction} action
 */
ActivityTimeline.prototype['action'] = undefined;

/**
 * @member {String} status
 */
ActivityTimeline.prototype['status'] = undefined;

/**
 * @member {Number} timestamp
 */
ActivityTimeline.prototype['timestamp'] = undefined;

/**
 * The transaction ID.
 * @member {String} transaction_id
 */
ActivityTimeline.prototype['transaction_id'] = undefined;






export default ActivityTimeline;

