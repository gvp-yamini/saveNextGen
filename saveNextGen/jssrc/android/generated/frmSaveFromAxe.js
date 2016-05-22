function addWidgetsfrmSaveFromAxe() {
    frmSaveFromAxe.setDefaultUnit(kony.flex.DP);
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
    var flexHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flexHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknHamburgerMenuKA",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var btnMenuKA = new kony.ui.Button({
        "centerY": "50.00%",
        "focusSkin": "CopyslButtonGlossBlue094a0c39d758f41",
        "height": "25dp",
        "id": "btnMenuKA",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_Button_be012084eafd446b9dd2b29ed116dfd1,
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
    }, {});
    var lblEventListKA = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblEventListKA",
        "isVisible": true,
        "left": "5dp",
        "skin": "skntitlelblKA",
        "text": "Save the Tree from Axe",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 10,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexHeader.add(
    btnMenuKA, lblEventListKA);
    var flxContainerKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "93%",
        "id": "flxContainerKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerKA.setDefaultUnit(kony.flex.DP);
    var lblTitleKA = new kony.ui.Label({
        "id": "lblTitleKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblHeadingKA",
        "text": "We will move any size tree anywhere!!!!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxfactsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxfactsKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxfactsKA.setDefaultUnit(kony.flex.DP);
    var lblEnterPersonalTrees = new kony.ui.Label({
        "id": "lblEnterPersonalTrees",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlblRoundKA",
        "text": "Enter Personal Details",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var TextField077eb454135b640 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextField077eb454135b640",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Enter FullName",
        "secureTextEntry": false,
        "skin": "skntbxKA",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyTextField0d6460e52b0794f = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "49.97%",
        "height": "40dp",
        "id": "CopyTextField0d6460e52b0794f",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Enter Contact Number",
        "secureTextEntry": false,
        "skin": "skntbxKA",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyTextField0142d8fdb60704f = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField0142d8fdb60704f",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Enter Address",
        "secureTextEntry": false,
        "skin": "skntbxKA",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxfactsKA.add(
    lblEnterPersonalTrees, TextField077eb454135b640, CopyTextField0d6460e52b0794f, CopyTextField0142d8fdb60704f);
    var btnRequestRetransplantationKA = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnKA",
        "height": "60dp",
        "id": "btnRequestRetransplantationKA",
        "isVisible": true,
        "onClick": AS_Button_67bafd4c54974fea83b89340d70de207,
        "right": "0dp",
        "skin": "sknbtnKA",
        "text": "Tree Transplantation",
        "top": "20dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContainerKA.add(
    lblTitleKA, flxfactsKA, btnRequestRetransplantationKA);
    flxMainKA.add(
    flexHeader, flxContainerKA);
    frmSaveFromAxe.add(
    flxMainKA);
};

function frmSaveFromAxeGlobals() {
    frmSaveFromAxe = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSaveFromAxe,
        "enabledForIdleTimeout": false,
        "id": "frmSaveFromAxe",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknBackgroundKA"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};