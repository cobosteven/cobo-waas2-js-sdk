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
import CreateCustodialWalletParams from './CreateCustodialWalletParams';
import CreateExchangeWalletParams from './CreateExchangeWalletParams';
import CreateMpcWalletParams from './CreateMpcWalletParams';
import ExchangeId from './ExchangeId';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CreateWalletParams model module.
 * @module model/CreateWalletParams
 * @version 1.0.0
 */
class CreateWalletParams {
    /**
     * Constructs a new <code>CreateWalletParams</code>.
     * @alias module:model/CreateWalletParams
     * @param {(module:model/CreateCustodialWalletParams|module:model/CreateExchangeWalletParams|module:model/CreateMpcWalletParams)} instance The actual instance to initialize CreateWalletParams.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof CreateCustodialWalletParams) {
                this.actualInstance = instance;
            } else if(CreateCustodialWalletParams.validateJSON(instance)){
                // plain JS object
                // create CreateCustodialWalletParams from JS object
                this.actualInstance = CreateCustodialWalletParams.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CreateCustodialWalletParams
            errorMessages.push("Failed to construct CreateCustodialWalletParams: " + err)
        }

        try {
            if (instance instanceof CreateMpcWalletParams) {
                this.actualInstance = instance;
            } else if(CreateMpcWalletParams.validateJSON(instance)){
                // plain JS object
                // create CreateMpcWalletParams from JS object
                this.actualInstance = CreateMpcWalletParams.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CreateMpcWalletParams
            errorMessages.push("Failed to construct CreateMpcWalletParams: " + err)
        }

        try {
            if (instance instanceof CreateExchangeWalletParams) {
                this.actualInstance = instance;
            } else if(CreateExchangeWalletParams.validateJSON(instance)){
                // plain JS object
                // create CreateExchangeWalletParams from JS object
                this.actualInstance = CreateExchangeWalletParams.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CreateExchangeWalletParams
            errorMessages.push("Failed to construct CreateExchangeWalletParams: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `CreateWalletParams` with oneOf schemas CreateCustodialWalletParams, CreateExchangeWalletParams, CreateMpcWalletParams. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `CreateWalletParams` with oneOf schemas CreateCustodialWalletParams, CreateExchangeWalletParams, CreateMpcWalletParams. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CreateWalletParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWalletParams} obj Optional instance to populate.
     * @return {module:model/CreateWalletParams} The populated <code>CreateWalletParams</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CreateWalletParams(data);
    }

    /**
     * Gets the actual instance, which can be <code>CreateCustodialWalletParams</code>, <code>CreateExchangeWalletParams</code>, <code>CreateMpcWalletParams</code>.
     * @return {(module:model/CreateCustodialWalletParams|module:model/CreateExchangeWalletParams|module:model/CreateMpcWalletParams)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CreateCustodialWalletParams</code>, <code>CreateExchangeWalletParams</code>, <code>CreateMpcWalletParams</code>.
     * @param {(module:model/CreateCustodialWalletParams|module:model/CreateExchangeWalletParams|module:model/CreateMpcWalletParams)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CreateWalletParams.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CreateWalletParams from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/CreateWalletParams} An instance of CreateWalletParams.
     */
    static fromJSON = function(json_string){
        return CreateWalletParams.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The wallet name.
 * @member {String} name
 */
CreateWalletParams.prototype['name'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CreateWalletParams.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateWalletParams.prototype['wallet_subtype'] = undefined;

/**
 * The ID of the owning vault. You can call [List all vaults](/v2/api-references/wallets--mpc-wallets/list-all-vaults) to retrieve all vault IDs under your organization.
 * @member {String} vault_id
 */
CreateWalletParams.prototype['vault_id'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
CreateWalletParams.prototype['exchange_id'] = undefined;

/**
 * The API key of your exchange account.
 * @member {String} apikey
 */
CreateWalletParams.prototype['apikey'] = undefined;

/**
 * The API secret of your exchange account.
 * @member {String} secret
 */
CreateWalletParams.prototype['secret'] = undefined;

/**
 * The passphrase of your exchange account.
 * @member {String} passphrase
 */
CreateWalletParams.prototype['passphrase'] = undefined;

/**
 * The memo you use when applying for the API key of your exchange account.
 * @member {String} memo
 */
CreateWalletParams.prototype['memo'] = undefined;

/**
 * The identifier of your exchange account. - For Binance, this is email address of your exchange account. - For OKX, this is the user name of your exchange account. 
 * @member {String} account_identify
 */
CreateWalletParams.prototype['account_identify'] = undefined;

/**
 * The GA code for the exchange.
 * @member {String} ga_code
 */
CreateWalletParams.prototype['ga_code'] = undefined;

/**
 * The ID of the Exchange Wallet (Main Account).
 * @member {String} main_wallet_id
 */
CreateWalletParams.prototype['main_wallet_id'] = undefined;


CreateWalletParams.OneOf = ["CreateCustodialWalletParams", "CreateExchangeWalletParams", "CreateMpcWalletParams"];

export default CreateWalletParams;

