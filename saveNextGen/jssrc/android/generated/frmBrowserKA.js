function addWidgetsfrmBrowserKA() {
    frmBrowserKA.setDefaultUnit(kony.flex.DP);
    var flexHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flexHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknHamburgerMenuKA",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var btnBackKA = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnBackKA",
        "height": "50dp",
        "id": "btnBackKA",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_7df0448b2f374fb2b25b133ad47d0560,
        "skin": "sknbtnBackKA",
        "text": "Back",
        "width": "60dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblEventListKA = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "lblEventListKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "skntitlelblKA",
        "text": "Events",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 10,
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnRegistrationKA = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "42dp",
        "id": "btnRegistrationKA",
        "isVisible": false,
        "right": "0dp",
        "skin": "slButtonGlossBlue",
        "text": "Register an Event",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHeader.add(
    btnBackKA, lblEventListKA, btnRegistrationKA);
    var broweserWidgetKA = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "height": "100%",
        "htmlString": "Browser",
        "id": "broweserWidgetKA",
        "isVisible": true,
        "left": "0dp",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    frmBrowserKA.add(
    flexHeader, broweserWidgetKA);
};

function frmBrowserKAGlobals() {
    frmBrowserKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowserKA,
        "enabledForIdleTimeout": false,
        "id": "frmBrowserKA",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "preShow": AS_Form_d5b2951006ad4580a0109b2940945099,
        "skin": "sknBackgroundKA"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
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