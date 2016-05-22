function addWidgetsfrmHowWeWork() {
    frmHowWeWork.setDefaultUnit(kony.flex.DP);
    var frmMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "frmMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    frmMainKA.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_Button_b3211cc780734657acf9349bb5955685,
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
        "left": "8dp",
        "skin": "skntitlelblKA",
        "text": "Volunteer With Us",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 10,
        "width": "64.00%",
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
    var flxScrollContainerKA = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "93%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollContainerKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "42dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScrollContainerKA.setDefaultUnit(kony.flex.DP);
    var Label01c02d7f670af45 = new kony.ui.Label({
        "id": "Label01c02d7f670af45",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlblHeadingKA",
        "text": "Who Are We????",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0cea72b269c0947 = new kony.ui.Label({
        "id": "CopyLabel0cea72b269c0947",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlblRoundKA",
        "text": "SaveNextGen is a Non-Profit-Non-Government organisation(NGO).We are working to acheive our common goal of preserving our Natures bounty by planting more trees and also saving the trees from axes which leads to a better future.Not only we plant but also take care of trees after that.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "97%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0cc8f4f3800d44e = new kony.ui.Label({
        "id": "CopyLabel0cc8f4f3800d44e",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlblHeadingKA",
        "text": "Our Acheivements:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0c10b6add2a104e = new kony.ui.Label({
        "id": "CopyLabel0c10b6add2a104e",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlblRoundKA",
        "text": "Till Now you have saved 5000 Trees facing from axe and also planted 58,434 trees.This number is still counting... We have a strength of 68 volunteers.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "97%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0daed3c553c0149 = new kony.ui.Label({
        "id": "CopyLabel0daed3c553c0149",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlblHeadingKA",
        "text": "Our Partners:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0662d66d1b2e54d = new kony.ui.Label({
        "id": "CopyLabel0662d66d1b2e54d",
        "isVisible": true,
        "left": "5dp",
        "skin": "sknlblRoundKA",
        "text": "Kony India Private Limited",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "97%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel07dd506a088284d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel07dd506a088284d",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblHeadingKA",
        "text": "Want to join us ????",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "8dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnRegistrationKA = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnKA",
        "height": "50dp",
        "id": "btnRegistrationKA",
        "isVisible": true,
        "onClick": AS_Button_3f06f6818d7c4d7c94d0bcc83438dc1a,
        "right": "0dp",
        "skin": "sknbtnKA",
        "text": "Register",
        "top": "10dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 1, 0],
        "paddingInPixel": false
    }, {});
    flxScrollContainerKA.add(
    Label01c02d7f670af45, CopyLabel0cea72b269c0947, CopyLabel0cc8f4f3800d44e, CopyLabel0c10b6add2a104e, CopyLabel0daed3c553c0149, CopyLabel0662d66d1b2e54d, CopyLabel07dd506a088284d, btnRegistrationKA);
    frmMainKA.add(
    flexHeader, flxScrollContainerKA);
    frmHowWeWork.add(
    frmMainKA);
};

function frmHowWeWorkGlobals() {
    frmHowWeWork = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHowWeWork,
        "enabledForIdleTimeout": false,
        "id": "frmHowWeWork",
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