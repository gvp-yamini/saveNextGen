function AS_Button_074a6a29c67c437a8f58a7e9454d5146(eventobject) {
    function SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_True() {
        frmDashboardKA.show();
    }
    function SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_Callback() {
        SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertIcon": "opportunities.png",
        "message": "Thanks for registering!!!!\n",
        "alertHandler": SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}