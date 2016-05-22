function onMapPostShow(eventobject) {
    return AS_Form_b3066292d6b5458ca8e83566628fd8d3(eventobject);
}

function AS_Form_b3066292d6b5458ca8e83566628fd8d3(eventobject) {
    function SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_True() {
        userAllowedLocation();
    }
    function SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_False() {}
    function SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_Callback(response) {
        if (response == true) {
            SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_True()
        } else {
            SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Current Location",
        "yesLabel": "Allow",
        "noLabel": "Don't Allow",
        "message": "saveNextGen would like to use your current location",
        "alertHandler": SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
    locatorPostShow();
}