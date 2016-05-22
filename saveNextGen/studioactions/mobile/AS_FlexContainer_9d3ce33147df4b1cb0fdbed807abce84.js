function AS_FlexContainer_9d3ce33147df4b1cb0fdbed807abce84(eventobject) {
    function callback() {}
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "alertIcon": "phone_icon_inactive.png",
        "message": frmEventsDetails.lblNumberKA.text,
        "alertHandler": callback()
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}