function addWidgetsfrmMapKA() {
    frmMapKA.setDefaultUnit(kony.flex.DP);
    var lblMapViewKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "lblMapViewKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknslFbox0ac881b9451f744",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    lblMapViewKA.setDefaultUnit(kony.flex.DP);
    var locatorMapKA = new kony.ui.Map({
        "calloutWidth": 100,
        "defaultPinImage": "atm_icon_inactive.png",
        "height": "92%",
        "id": "locatorMapKA",
        "isVisible": true,
        "left": "0dp",
        "locationData": [{
            "desc": "206 Guadalupe St",
            "lat": "17.447326",
            "lon": "78.371358",
            "name": "Guadalupe ATM"
        }, {
            "desc": "2119 E Seventh St",
            "lat": "17.441839",
            "lon": "78.380928",
            "name": "East Seventh"
        }, {
            "desc": "Austin, TX 78701",
            "lat": "28.449340",
            "lon": "-81.481519",
            "name": "South Lamar ATM"
        }, {
            "desc": "Colorado, TX 78701",
            "lat": "28.449340",
            "lon": "-81.481519",
            "name": "Lake Austin"
        }, {
            "desc": "Alaska, TX 78701",
            "lat": "60.441839",
            "lon": "31.481519",
            "name": "Marcos Lavino"
        }],
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "60dp",
        "width": "100%"
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showZoomControl": true,
        "zoomLevel": 1
    });
    var mapCurrentLocationWrapperKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "3%",
        "clipBounds": false,
        "height": "60dp",
        "id": "mapCurrentLocationWrapperKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "5%",
        "skin": "sknCopyslFbox028d4484c2e394a",
        "width": "60dp",
        "zIndex": 1
    }, {}, {});
    mapCurrentLocationWrapperKA.setDefaultUnit(kony.flex.DP);
    var Image0436b29ac09964f = new kony.ui.Image2({
        "centerX": "52%",
        "centerY": "52%",
        "height": "30dp",
        "id": "Image0436b29ac09964f",
        "isVisible": true,
        "skin": "sknslImage03b0c8dd54b5640",
        "src": "locator_icon_outline.png",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var currentLocationButton = new kony.ui.Button({
        "focusSkin": "sknCopyslButtonGlossBlue0072be9ce396342",
        "height": "100%",
        "id": "currentLocationButton",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknCopyslButtonGlossBlue09e8743b90f5d4c",
        "top": "-1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    mapCurrentLocationWrapperKA.add(
    Image0436b29ac09964f, currentLocationButton);
    var closeCalloutButton = new kony.ui.Button({
        "focusSkin": "skninvisibleButton05092625c966649",
        "height": "100%",
        "id": "closeCalloutButton",
        "isVisible": false,
        "left": "0dp",
        "skin": "skninvisibleButton05092625c966649",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var mapCalloutExample = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "160dp",
        "id": "mapCalloutExample",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15%",
        "skin": "sknCopyslFbox0b25d764b21d442",
        "top": "100dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    mapCalloutExample.setDefaultUnit(kony.flex.DP);
    var calloutCarrot = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "calloutCarrot",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "102dp",
        "skin": "skngenericCard0fcd872dbed5c49",
        "width": "40dp",
        "zIndex": 1
    }, {}, {});
    calloutCarrot.setDefaultUnit(kony.flex.DP);
    calloutCarrot.add();
    var calloutCardWrapper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "140dp",
        "id": "calloutCardWrapper",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skngenericCard0fcd872dbed5c49",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    calloutCardWrapper.setDefaultUnit(kony.flex.DP);
    var calloutLeftWrapper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "calloutLeftWrapper",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknCopyslFbox09fbe221f54e442",
        "top": "0dp",
        "width": "35%"
    }, {}, {});
    calloutLeftWrapper.setDefaultUnit(kony.flex.DP);
    var Label0463871ccdb6a48 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0463871ccdb6a48",
        "isVisible": true,
        "skin": "sknCopyslLabel055690980659e4c",
        "text": kony.i18n.getLocalizedString("i18n.locateus.frmLocatorKA.Label0a12bd6aecff249"),
        "top": "40dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label09946a58223194c = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label09946a58223194c",
        "isVisible": true,
        "skin": "sknCopyslLabel0cfd2d4a81f7c4b",
        "text": kony.i18n.getLocalizedString("i18n.locateus.frmLocatorKA.Label05d7e98b32dde4c"),
        "top": "75dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    calloutLeftWrapper.add(
    Label0463871ccdb6a48, Label09946a58223194c);
    var calloutRightWrapper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60dp",
        "id": "calloutRightWrapper",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "35%",
        "skin": "sknslFbox0ac881b9451f744",
        "top": "0dp",
        "width": "65%",
        "zIndex": 1
    }, {}, {});
    calloutRightWrapper.setDefaultUnit(kony.flex.DP);
    var Label00398bcccebcb48 = new kony.ui.Label({
        "id": "Label00398bcccebcb48",
        "isVisible": true,
        "left": "10%",
        "skin": "skn0e817116587d14c",
        "text": kony.i18n.getLocalizedString("i18n.locateus.frmLocatorKA.Label0f31c1a03265843"),
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0b4d144cf92c04e = new kony.ui.Label({
        "id": "CopyLabel0b4d144cf92c04e",
        "isVisible": true,
        "left": "10%",
        "skin": "sknlocatorListAddress07484a933586545",
        "text": kony.i18n.getLocalizedString("i18n.locateus.frmLocatorKA.CopyLabel0c58db39540364d"),
        "top": "25dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0a915f29335b74e = new kony.ui.Label({
        "id": "CopyLabel0a915f29335b74e",
        "isVisible": true,
        "left": "10%",
        "skin": "sknlocatorListAddress07484a933586545",
        "text": kony.i18n.getLocalizedString("i18n.locateus.frmLocatorKA.CopyLabel0045e6c9dee8243"),
        "top": "40dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    calloutRightWrapper.add(
    Label00398bcccebcb48, CopyLabel0b4d144cf92c04e, CopyLabel0a915f29335b74e);
    var Button027c8bdcd88ca4e = new kony.ui.Button({
        "focusSkin": "skninvisibleButtonFocus042233b5110a04f",
        "height": "100%",
        "id": "Button027c8bdcd88ca4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "skninvisibleButton05092625c966649",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    calloutCardWrapper.add(
    calloutLeftWrapper, calloutRightWrapper, Button027c8bdcd88ca4e);
    mapCalloutExample.add(
    calloutCarrot, calloutCardWrapper);
    var CopybtnMonthKA031aacada1f3841 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtn159ac22KA",
        "height": "50dp",
        "id": "CopybtnMonthKA031aacada1f3841",
        "isVisible": true,
        "onClick": AS_Button_569e4ae1e0354bd389322fee3363ebd5,
        "right": "147dp",
        "skin": "sknbtn159ac22KA",
        "text": "List View",
        "top": "5dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    lblMapViewKA.add(
    locatorMapKA, mapCurrentLocationWrapperKA, closeCalloutButton, mapCalloutExample, CopybtnMonthKA031aacada1f3841);
    frmMapKA.add(
    lblMapViewKA);
};

function frmMapKAGlobals() {
    frmMapKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMapKA,
        "enabledForIdleTimeout": false,
        "id": "frmMapKA",
        "init": AS_Form_616c2ef9c3c8496f99f41c24c9aecb63,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_a93a4999b62546e4a9fc67b7f0d4d8e9,
        "postShow": AS_Form_b3066292d6b5458ca8e83566628fd8d3,
        "preShow": AS_Form_0454c367ee374936a34a50a106dd7746,
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