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
* Enum class MessageSignSourceType.
* @enum {}
* @readonly
*/
export default class MessageSignSourceType {
    
        /**
         * value: "Org-Controlled"
         * @const
         */
        "Org-Controlled" = "Org-Controlled";

    
        /**
         * value: "User-Controlled"
         * @const
         */
        "User-Controlled" = "User-Controlled";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>MessageSignSourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageSignSourceType} The enum <code>MessageSignSourceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

