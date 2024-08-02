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
import FeeType from './FeeType';
import UtxoFeeBasePrice from './UtxoFeeBasePrice';

/**
 * The TransactionUtxoFee model module.
 * @module model/TransactionUtxoFee
 * @version 1.0.0
 */
class TransactionUtxoFee {
    /**
     * Constructs a new <code>TransactionUtxoFee</code>.
     * The transaction fee actually charged by the chain that uses the UTXO fee model, such as Bitcoin. The transaction fee is calculated by multiplying the fee rate by the transaction size. This can be expressed as: Transaction fee &#x3D; fee rate * transaction size. 
     * @alias module:model/TransactionUtxoFee
     * @implements module:model/UtxoFeeBasePrice
     * @param fee_type {module:model/FeeType} 
     */
    constructor(fee_type) { 
        UtxoFeeBasePrice.initialize(this);
        TransactionUtxoFee.initialize(this, fee_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee_type) { 
        obj['fee_type'] = fee_type;
    }

    /**
     * Constructs a <code>TransactionUtxoFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionUtxoFee} obj Optional instance to populate.
     * @return {module:model/TransactionUtxoFee} The populated <code>TransactionUtxoFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionUtxoFee();
            UtxoFeeBasePrice.constructFromObject(data, obj);

            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('fee_used')) {
                obj['fee_used'] = ApiClient.convertToType(data['fee_used'], 'String');
            }
            if (data.hasOwnProperty('max_fee_amount')) {
                obj['max_fee_amount'] = ApiClient.convertToType(data['max_fee_amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionUtxoFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionUtxoFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionUtxoFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_rate'] && !(typeof data['fee_rate'] === 'string' || data['fee_rate'] instanceof String)) {
            throw new Error("Expected the field `fee_rate` to be a primitive type in the JSON string but got " + data['fee_rate']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['fee_used'] && !(typeof data['fee_used'] === 'string' || data['fee_used'] instanceof String)) {
            throw new Error("Expected the field `fee_used` to be a primitive type in the JSON string but got " + data['fee_used']);
        }
        // ensure the json data is a string
        if (data['max_fee_amount'] && !(typeof data['max_fee_amount'] === 'string' || data['max_fee_amount'] instanceof String)) {
            throw new Error("Expected the field `max_fee_amount` to be a primitive type in the JSON string but got " + data['max_fee_amount']);
        }

        return true;
    }


}

TransactionUtxoFee.RequiredProperties = ["fee_type"];

/**
 * The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
TransactionUtxoFee.prototype['fee_rate'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
TransactionUtxoFee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
TransactionUtxoFee.prototype['token_id'] = undefined;

/**
 * The transaction fee.
 * @member {String} fee_used
 */
TransactionUtxoFee.prototype['fee_used'] = undefined;

/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
TransactionUtxoFee.prototype['max_fee_amount'] = undefined;


// Implement UtxoFeeBasePrice interface:
/**
 * The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
UtxoFeeBasePrice.prototype['fee_rate'] = undefined;




export default TransactionUtxoFee;

