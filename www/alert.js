module.exports = {
    myAlert: function (title, message, buttonLabel, successCallback) {
        cordova.exec(successCallback,
        null, // skipping error callback
        "Alert",
        "alert",
        [title, message, buttonLabel]);
    }
};