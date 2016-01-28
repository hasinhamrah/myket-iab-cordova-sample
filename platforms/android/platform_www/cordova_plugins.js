cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/myket-iab-cordova-plugin/www/inappbilling.js",
        "id": "myket-iab-cordova-plugin.InAppBillingPlugin",
        "pluginId": "myket-iab-cordova-plugin",
        "clobbers": [
            "inappbilling"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "myket-iab-cordova-plugin": "3.0.2"
}
// BOTTOM OF METADATA
});