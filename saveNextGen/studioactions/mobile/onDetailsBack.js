function onDetailsBack(eventobject) {
    return AS_Button_baf118006bb44cb48c0058594bc9cebc(eventobject);
}

function AS_Button_baf118006bb44cb48c0058594bc9cebc(eventobject) {
    if (kony.application.getPreviousForm().id == "frmDashboardKA") {
        frmDashboardKA.show();
    } else {
        frmEventListKA.show();
    }
}