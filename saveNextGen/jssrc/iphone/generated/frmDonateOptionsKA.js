function addWidgetsfrmDonateOptionsKA() {
    frmDonateOptionsKA.setDefaultUnit(kony.flex.DP);
    var flxMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxMainKA.setDefaultUnit(kony.flex.DP);
    var flxTitleBarKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxTitleBarKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknHamburgerMenuKA",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitleBarKA.setDefaultUnit(kony.flex.DP);
    var btnMenuKA = new kony.ui.Button({
        "centerY": "50.00%",
        "height": "25dp",
        "id": "btnMenuKA",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_Button_492fbb25d1014789ae6ee7bcf98318e4,
        "skin": "CopyslButtonGlossBlue094a0c39d758f41",
        "text": "Button",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblTitleKA = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTitleKA",
        "isVisible": true,
        "left": "10dp",
        "skin": "skntitlelblKA",
        "text": "Donate",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxTitleBarKA.add(
    btnMenuKA, lblTitleKA);
    var flxBubble1KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "26%",
        "clipBounds": true,
        "height": "180dp",
        "id": "flxBubble1KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5dp",
        "onClick": AS_FlexContainer_437e8e01f68e4d83b1a9a0a84946dc8b,
        "skin": "sknflxDonateRoundKA",
        "top": "35dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxBubble1KA.setDefaultUnit(kony.flex.DP);
    var CopylblTitleKA0df6c8d467ca049 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopylblTitleKA0df6c8d467ca049",
        "isVisible": true,
        "skin": "sknlblHeadingKA",
        "text": "Click here to Donate!!",
        "width": "70%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxBubble1KA.add(
    CopylblTitleKA0df6c8d467ca049);
    var FlexContainer03a7930075d6149 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "FlexContainer03a7930075d6149",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "260dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer03a7930075d6149.setDefaultUnit(kony.flex.DP);
    var Label0ff6ea73a9e9a4a = new kony.ui.Label({
        "id": "Label0ff6ea73a9e9a4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "You can also transfer your contribution to SaveNextGen's Bank Account.",
        "top": "0dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label01c02d7f670af45 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label01c02d7f670af45",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknHeaderTitleKA",
        "text": "SaveNextGen Trust",
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
    var CopyLabel029ccbf4187b949 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel029ccbf4187b949",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "Current Account",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0f0021800f79f40 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0f0021800f79f40",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "Account # 34803899435",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0a0d7ee144fbf42 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0a0d7ee144fbf42",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "HDFC Bank",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel077a89f814e3d4e = new kony.ui.Label({
        "centerX": "50.05%",
        "id": "CopyLabel077a89f814e3d4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "Jubilee Hills Branch",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0dd2e8597b5d74e = new kony.ui.Label({
        "centerX": "50.05%",
        "id": "CopyLabel0dd2e8597b5d74e",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "Hyderabad -5000081",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel09908cf014c4042 = new kony.ui.Label({
        "centerX": "50.05%",
        "id": "CopyLabel09908cf014c4042",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "IFSC Code - HDFC0000317",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel00fd22160752e48 = new kony.ui.Label({
        "centerX": "50.05%",
        "id": "CopyLabel00fd22160752e48",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblDonateKA",
        "text": "MICR Code - 400240003",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0a9af798fc6af4d = new kony.ui.Label({
        "centerX": "50.05%",
        "id": "CopyLabel0a9af798fc6af4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknInfoKA",
        "text": "Write to us at info@savenextgen after transferring your contribution.",
        "top": "0dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer03a7930075d6149.add(
    Label0ff6ea73a9e9a4a, Label01c02d7f670af45, CopyLabel029ccbf4187b949, CopyLabel0f0021800f79f40, CopyLabel0a0d7ee144fbf42, CopyLabel077a89f814e3d4e, CopyLabel0dd2e8597b5d74e, CopyLabel09908cf014c4042, CopyLabel00fd22160752e48, CopyLabel0a9af798fc6af4d);
    flxMainKA.add(
    flxTitleBarKA, flxBubble1KA, FlexContainer03a7930075d6149);
    frmDonateOptionsKA.add(
    flxMainKA);
};

function frmDonateOptionsKAGlobals() {
    frmDonateOptionsKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDonateOptionsKA,
        "enabledForIdleTimeout": false,
        "id": "frmDonateOptionsKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknBackgroundKA"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};