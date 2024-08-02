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
 * The LockUtxosRequestUtxosInner model module.
 * @module model/LockUtxosRequestUtxosInner
 * @version 1.0.0
 */
class LockUtxosRequestUtxosInner {
    /**
     * Constructs a new <code>LockUtxosRequestUtxosInner</code>.
     * @alias module:model/LockUtxosRequestUtxosInner
     * @param token_id {String} The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param tx_hash {String} The transaction hash.
     * @param vout_n {Number} The output index of the UTXO.
     */
    constructor(token_id, tx_hash, vout_n) { 
        
        LockUtxosRequestUtxosInner.initialize(this, token_id, tx_hash, vout_n);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token_id, tx_hash, vout_n) { 
        obj['token_id'] = token_id;
        obj['tx_hash'] = tx_hash;
        obj['vout_n'] = vout_n;
    }

    /**
     * Constructs a <code>LockUtxosRequestUtxosInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LockUtxosRequestUtxosInner} obj Optional instance to populate.
     * @return {module:model/LockUtxosRequestUtxosInner} The populated <code>LockUtxosRequestUtxosInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LockUtxosRequestUtxosInner();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('tx_hash')) {
                obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
            }
            if (data.hasOwnProperty('vout_n')) {
                obj['vout_n'] = ApiClient.convertToType(data['vout_n'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LockUtxosRequestUtxosInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LockUtxosRequestUtxosInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LockUtxosRequestUtxosInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['tx_hash'] && !(typeof data['tx_hash'] === 'string' || data['tx_hash'] instanceof String)) {
            throw new Error("Expected the field `tx_hash` to be a primitive type in the JSON string but got " + data['tx_hash']);
        }

        return true;
    }


}

LockUtxosRequestUtxosInner.RequiredProperties = ["token_id", "tx_hash", "vout_n"];

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
LockUtxosRequestUtxosInner.prototype['token_id'] = undefined;

/**
 * The transaction hash.
 * @member {String} tx_hash
 */
LockUtxosRequestUtxosInner.prototype['tx_hash'] = undefined;

/**
 * The output index of the UTXO.
 * @member {Number} vout_n
 */
LockUtxosRequestUtxosInner.prototype['vout_n'] = undefined;






export default LockUtxosRequestUtxosInner;

