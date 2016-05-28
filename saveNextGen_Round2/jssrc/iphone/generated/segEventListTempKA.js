function initializesegEventListTempKA() {
    flxEventsInfoKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "85dp",
        "id": "flxEventsInfoKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlxTitleBarKA"
    }, {}, {});
    flxEventsInfoKA.setDefaultUnit(kony.flex.DP);
    var lblTimeKA = new kony.ui.Label({
        "height": "19dp",
        "id": "lblTimeKA",
        "isVisible": true,
        "left": "18dp",
        "right": "8dp",
        "skin": "sknBook5B7A9A30KA",
        "text": "8:00 AM",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDatefromKA = new kony.ui.Label({
        "id": "lblDatefromKA",
        "isVisible": false,
        "left": "0dp",
        "right": "0dp",
        "skin": "slLabel",
        "text": "8:00 AM",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDescriptionKA = new kony.ui.Label({
        "id": "lblDescriptionKA",
        "isVisible": true,
        "left": "18dp",
        "right": "8dp",
        "skin": "sknEventslblKA",
        "text": "Demo of HR SaaS",
        "top": "30dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblCategoryKA = new kony.ui.Label({
        "height": "30dp",
        "id": "lblCategoryKA",
        "isVisible": true,
        "right": "10dp",
        "skin": "sknlblHeadingRedKA",
        "text": "label1",
        "top": "55dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxEventsInfoKA.add(
    lblTimeKA, lblDatefromKA, lblDescriptionKA, lblCategoryKA);
}