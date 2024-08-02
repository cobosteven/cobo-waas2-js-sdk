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
import CoboSafeDelegate from './CoboSafeDelegate';
import TransactionSourceType from './TransactionSourceType';

/**
 * The TransactionSmartContractSafeWalletSource model module.
 * @module model/TransactionSmartContractSafeWalletSource
 * @version 1.0.0
 */
class TransactionSmartContractSafeWalletSource {
    /**
     * Constructs a new <code>TransactionSmartContractSafeWalletSource</code>.
     * Information about the transaction source, which varies depending on whether you are the initiator or the receiver of the transaction.   - As the initiator, you will see detailed information about the transaction source, and the &#x60;source&#x60; will be displayed as one of the following wallet sub-types: &#x60;Asset&#x60;, &#x60;Org-Controlled&#x60;, &#x60;User-Controlled&#x60;, &#x60;Safe{Wallet}&#x60;, &#x60;Main&#x60;, or &#x60;Sub&#x60;. - As the receiver, you will see the &#x60;source&#x60; as either &#x60;DepositFromAddress&#x60;, &#x60;DepositFromWallet&#x60;, or &#x60;DepositFromLoop&#x60;. If the transaction is from the Loop transfer network, the source will be &#x60;DepositFromLoop&#x60;. Otherwise, it will be either &#x60;DepositFromWallet&#x60; (indicating an Exchange Wallet) or &#x60;DepositFromAddress&#x60; (indicating other wallet type than an Exchange Wallet or an external address). 
     * @alias module:model/TransactionSmartContractSafeWalletSource
     * @param source_type {module:model/TransactionSourceType} 
     * @param wallet_id {String} The wallet ID.
     * @param address {String} The wallet address.
     * @param delegate {module:model/CoboSafeDelegate} 
     */
    constructor(source_type, wallet_id, address, delegate) { 
        
        TransactionSmartContractSafeWalletSource.initialize(this, source_type, wallet_id, address, delegate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, wallet_id, address, delegate) { 
        obj['source_type'] = source_type;
        obj['wallet_id'] = wallet_id;
        obj['address'] = address;
        obj['delegate'] = delegate;
    }

    /**
     * Constructs a <code>TransactionSmartContractSafeWalletSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSmartContractSafeWalletSource} obj Optional instance to populate.
     * @return {module:model/TransactionSmartContractSafeWalletSource} The populated <code>TransactionSmartContractSafeWalletSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSmartContractSafeWalletSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = TransactionSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('delegate')) {
                obj['delegate'] = CoboSafeDelegate.constructFromObject(data['delegate']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSmartContractSafeWalletSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSmartContractSafeWalletSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionSmartContractSafeWalletSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `delegate`
        if (data['delegate']) { // data not null
          CoboSafeDelegate.validateJSON(data['delegate']);
        }

        return true;
    }


}

TransactionSmartContractSafeWalletSource.RequiredProperties = ["source_type", "wallet_id", "address", "delegate"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionSmartContractSafeWalletSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionSmartContractSafeWalletSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
TransactionSmartContractSafeWalletSource.prototype['address'] = undefined;

/**
 * @member {module:model/CoboSafeDelegate} delegate
 */
TransactionSmartContractSafeWalletSource.prototype['delegate'] = undefined;






export default TransactionSmartContractSafeWalletSource;

