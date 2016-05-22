function initializehdrListTmplKA() {
    flxListHdrKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25dp",
        "id": "flxListHdrKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    flxListHdrKA.setDefaultUnit(kony.flex.DP);
    var lblListHdrKA = new kony.ui.Label({
        "height": "20dp",
        "id": "lblListHdrKA",
        "isVisible": true,
        "left": "30dp",
        "right": "0dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "4dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxListHdrKA.add(
    lblListHdrKA);
}