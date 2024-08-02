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
* Enum class WebhookEventType.
* @enum {}
* @readonly
*/
export default class WebhookEventType {
    
        /**
         * value: "wallets.transaction.created"
         * @const
         */
        "created" = "wallets.transaction.created";

    
        /**
         * value: "wallets.transaction.updated"
         * @const
         */
        "updated" = "wallets.transaction.updated";

    
        /**
         * value: "wallets.transaction.failed"
         * @const
         */
        "failed" = "wallets.transaction.failed";

    
        /**
         * value: "wallets.transaction.succeeded"
         * @const
         */
        "succeeded" = "wallets.transaction.succeeded";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>WebhookEventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WebhookEventType} The enum <code>WebhookEventType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

