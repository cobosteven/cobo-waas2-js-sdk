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
import LockUtxosRequestUtxosInner from './LockUtxosRequestUtxosInner';

/**
 * The LockUtxosRequest model module.
 * @module model/LockUtxosRequest
 * @version 1.0.0
 */
class LockUtxosRequest {
    /**
     * Constructs a new <code>LockUtxosRequest</code>.
     * @alias module:model/LockUtxosRequest
     * @param utxos {Array.<module:model/LockUtxosRequestUtxosInner>} 
     */
    constructor(utxos) { 
        
        LockUtxosRequest.initialize(this, utxos);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, utxos) { 
        obj['utxos'] = utxos;
    }

    /**
     * Constructs a <code>LockUtxosRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LockUtxosRequest} obj Optional instance to populate.
     * @return {module:model/LockUtxosRequest} The populated <code>LockUtxosRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LockUtxosRequest();

            if (data.hasOwnProperty('utxos')) {
                obj['utxos'] = ApiClient.convertToType(data['utxos'], [LockUtxosRequestUtxosInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LockUtxosRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LockUtxosRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LockUtxosRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['utxos']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['utxos'])) {
                throw new Error("Expected the field `utxos` to be an array in the JSON data but got " + data['utxos']);
            }
            // validate the optional field `utxos` (array)
            for (const item of data['utxos']) {
                LockUtxosRequestUtxosInner.validateJSON(item);
            };
        }

        return true;
    }


}

LockUtxosRequest.RequiredProperties = ["utxos"];

/**
 * @member {Array.<module:model/LockUtxosRequestUtxosInner>} utxos
 */
LockUtxosRequest.prototype['utxos'] = undefined;






export default LockUtxosRequest;

