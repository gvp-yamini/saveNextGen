function AS_Button_8beda583f1a44ecf97ffcae58f58f84a(eventobject) {
    function SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_True() {
        frmDashboardKA.show();
    }
    function SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_Callback() {
        SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertIcon": "opportunities.png",
        "message": "Thanks for donating!!!\nYour lifespan has been increased by 3years!!!",
        "alertHandler": SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}