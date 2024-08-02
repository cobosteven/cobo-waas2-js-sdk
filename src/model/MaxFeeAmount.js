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

/**
 * The MaxFeeAmount model module.
 * @module model/MaxFeeAmount
 * @version 1.0.0
 */
class MaxFeeAmount {
    /**
     * Constructs a new <code>MaxFeeAmount</code>.
     * The maximum transaction fee.
     * @alias module:model/MaxFeeAmount
     */
    constructor() { 
        
        MaxFeeAmount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MaxFeeAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaxFeeAmount} obj Optional instance to populate.
     * @return {module:model/MaxFeeAmount} The populated <code>MaxFeeAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaxFeeAmount();

            if (data.hasOwnProperty('max_fee_amount')) {
                obj['max_fee_amount'] = ApiClient.convertToType(data['max_fee_amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MaxFeeAmount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MaxFeeAmount</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['max_fee_amount'] && !(typeof data['max_fee_amount'] === 'string' || data['max_fee_amount'] instanceof String)) {
            throw new Error("Expected the field `max_fee_amount` to be a primitive type in the JSON string but got " + data['max_fee_amount']);
        }

        return true;
    }


}



/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
MaxFeeAmount.prototype['max_fee_amount'] = undefined;






export default MaxFeeAmount;

