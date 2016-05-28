function addWidgetsfrmContactUsKA() {
    frmContactUsKA.setDefaultUnit(kony.flex.DP);
    var flxMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
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
    var FlexContainer0e5d45ad95a1747 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "FlexContainer0e5d45ad95a1747",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchEnd": AS_FlexContainer_e355c9f0376048b1b33e2a067cbe0920,
        "skin": "slFbox",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {}, {});
    FlexContainer0e5d45ad95a1747.setDefaultUnit(kony.flex.DP);
    var btnMenuKA = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50.00%",
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "btnMenuKA",
        "isVisible": true,
        "left": "5dp",
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
    FlexContainer0e5d45ad95a1747.add(
    btnMenuKA);
    var lblTitleKA = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTitleKA",
        "isVisible": true,
        "left": "10dp",
        "skin": "skntitlelblKA",
        "text": "Contact Us",
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
    FlexContainer0e5d45ad95a1747, lblTitleKA);
    var flxContactUsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "93%",
        "id": "flxContactUsKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContactUsKA.setDefaultUnit(kony.flex.DP);
    var flxAddressContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "120dp",
        "id": "flxAddressContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxAddressContainer.setDefaultUnit(kony.flex.DP);
    var lblAddress = new kony.ui.Label({
        "id": "lblAddress",
        "isVisible": true,
        "left": "9dp",
        "skin": "sknlblHeadingKA",
        "text": "Meet us at :",
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
    var lblAddressValueKA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblAddressValueKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblRoundKA",
        "text": "Flat  no: 109, Sai Plaza,",
        "top": "4dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
    });
    var CopylblAddressValueKA009c552d8dd2848 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblAddressValueKA009c552d8dd2848",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblRoundKA",
        "text": "Phoenix Infocity,Hitech city,Madhapur,",
        "top": "4dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
    });
    var CopylblAddressValueKA06847aa1bb4a345 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblAddressValueKA06847aa1bb4a345",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblRoundKA",
        "text": "Hyderabad,500081",
        "top": "4dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
    });
    flxAddressContainer.add(
    lblAddress, lblAddressValueKA, CopylblAddressValueKA009c552d8dd2848, CopylblAddressValueKA06847aa1bb4a345);
    var flxEmailKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flxEmailKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEmailKA.setDefaultUnit(kony.flex.DP);
    var lblEmailKA = new kony.ui.Label({
        "id": "lblEmailKA",
        "isVisible": true,
        "left": "9dp",
        "skin": "sknlblHeadingKA",
        "text": "Mail us  at :",
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
    var lblEmailValueKA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblEmailValueKA",
        "isVisible": true,
        "left": "9dp",
        "skin": "sknlblRoundKA",
        "text": "savefuture@savenextgen.org",
        "top": "4dp",
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
    flxEmailKA.add(
    lblEmailKA, lblEmailValueKA);
    var flxTelephoneKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxTelephoneKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTelephoneKA.setDefaultUnit(kony.flex.DP);
    var lblTelephoneKA = new kony.ui.Label({
        "id": "lblTelephoneKA",
        "isVisible": true,
        "left": "9dp",
        "skin": "sknlblHeadingKA",
        "text": "Call us at :",
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
    var lblTelephoneValue1KA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTelephoneValue1KA",
        "isVisible": true,
        "left": "9dp",
        "skin": "sknlblRoundKA",
        "text": "+91-8933238987",
        "top": "4dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTelephoneValue2KA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTelephoneValue2KA",
        "isVisible": true,
        "left": "9dp",
        "skin": "sknlblRoundKA",
        "text": "+91-8933238986",
        "top": "4dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTelephoneValue3KA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTelephoneValue3KA",
        "isVisible": true,
        "left": "9dp",
        "skin": "sknlblRoundKA",
        "text": "+91-8933238985",
        "top": "4dp",
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
    flxTelephoneKA.add(
    lblTelephoneKA, lblTelephoneValue1KA, lblTelephoneValue2KA, lblTelephoneValue3KA);
    flxContactUsKA.add(
    flxAddressContainer, flxEmailKA, flxTelephoneKA);
    flxMainKA.add(
    flxTitleBarKA, flxContactUsKA);
    frmContactUsKA.add(
    flxMainKA);
};

function frmContactUsKAGlobals() {
    frmContactUsKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContactUsKA,
        "enabledForIdleTimeout": false,
        "id": "frmContactUsKA",
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