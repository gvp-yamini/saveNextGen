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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDatefromKA = new kony.ui.Label({
        "id": "lblDatefromKA",
        "isVisible": false,
        "left": "0dp",
        "right": "0dp",
        "skin": "slLabel",
        "text": "8:00 AM",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDescriptionKA = new kony.ui.Label({
        "id": "lblDescriptionKA",
        "isVisible": true,
        "left": "18dp",
        "right": "8dp",
        "skin": "sknEventslblKA",
        "text": "Demo of HR SaaS",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "30dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCategoryKA = new kony.ui.Label({
        "height": "30dp",
        "id": "lblCategoryKA",
        "isVisible": true,
        "right": "10dp",
        "skin": "sknlblHeadingRedKA",
        "text": "label1",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "55dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxEventsInfoKA.add(
    lblTimeKA, lblDatefromKA, lblDescriptionKA, lblCategoryKA);
}