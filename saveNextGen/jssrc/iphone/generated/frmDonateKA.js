function addWidgetsfrmDonateKA() {
    frmDonateKA.setDefaultUnit(kony.flex.DP);
    var flxMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
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
    var btnBackKA = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnBackKA",
        "height": "50dp",
        "id": "btnBackKA",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_a2b67f6eddff4f6295911cc099298e11,
        "skin": "sknbtnBackKA",
        "text": "Back",
        "width": "60dp"
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
        "text": "Donate ",
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
    btnBackKA, lblTitleKA);
    var lblEnterPersonalTrees = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblEnterPersonalTrees",
        "isVisible": true,
        "skin": "sknlblHeadingKA",
        "text": "Enter Personal Details",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyTextField060a78e62606140 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField060a78e62606140",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Enter Email Id",
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
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
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
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var ListBox01ec90faf129742 = new kony.ui.ListBox({
        "centerX": "49.97%",
        "height": "40dp",
        "id": "ListBox01ec90faf129742",
        "isVisible": true,
        "left": 44,
        "masterData": [
            ["lb1", "Select Donation type"],
            ["lb2", "For Sapling"],
            ["Key892", "For Maintenance"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Select Donation type"],
        "skin": "sknlbxKA",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopylblEnterPersonalTrees06957197f3cbf4a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblEnterPersonalTrees06957197f3cbf4a",
        "isVisible": true,
        "skin": "sknlblHeadingKA",
        "text": "Your Contribution",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyTextField0142d8fdb60704f = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "51.42%",
        "height": "40dp",
        "id": "CopyTextField0142d8fdb60704f",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Enter Amount",
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
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Button0db69e7c65f7447 = new kony.ui.Button({
        "centerX": "50%",
        "height": "50dp",
        "id": "Button0db69e7c65f7447",
        "isVisible": true,
        "left": "63dp",
        "onClick": AS_Button_8beda583f1a44ecf97ffcae58f58f84a,
        "skin": "sknbtnKA",
        "text": "Donate",
        "top": "46dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxMainKA.add(
    flxTitleBarKA, lblEnterPersonalTrees, TextField077eb454135b640, CopyTextField060a78e62606140, CopyTextField0d6460e52b0794f, ListBox01ec90faf129742, CopylblEnterPersonalTrees06957197f3cbf4a, CopyTextField0142d8fdb60704f, Button0db69e7c65f7447);
    frmDonateKA.add(
    flxMainKA);
};

function frmDonateKAGlobals() {
    frmDonateKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDonateKA,
        "enabledForIdleTimeout": false,
        "id": "frmDonateKA",
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