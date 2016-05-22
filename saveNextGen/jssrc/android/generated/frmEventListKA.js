function addWidgetsfrmEventListKA() {
    frmEventListKA.setDefaultUnit(kony.flex.DP);
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
        "height": "8%",
        "id": "flxTitleBarKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknHamburgerMenuKA",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitleBarKA.setDefaultUnit(kony.flex.DP);
    var btnMenuKA = new kony.ui.Button({
        "centerY": "50.00%",
        "focusSkin": "CopyslButtonGlossBlue094a0c39d758f41",
        "height": "25dp",
        "id": "btnMenuKA",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_Button_3469f54f8607452283347923bd1d73d7,
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
    var lblTitleKA = new kony.ui.Label({
        "centerY": "50.22%",
        "id": "lblTitleKA",
        "isVisible": true,
        "left": "40dp",
        "skin": "skntitlelblKA",
        "text": "Events",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnMonthKA = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtn159ac22KA",
        "height": "90%",
        "id": "btnMonthKA",
        "isVisible": true,
        "onClick": AS_Button_a0d55e6b574c4040afe29826326d886a,
        "right": "5dp",
        "skin": "sknbtn159ac22KA",
        "text": "Map View",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTitleBarKA.add(
    btnMenuKA, lblTitleKA, btnMonthKA);
    var searchContainer0dccbeeef573940 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "searchContainer0dccbeeef573940",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknslFbox0d43b3f9082ff42",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    searchContainer0dccbeeef573940.setDefaultUnit(kony.flex.DP);
    var searchTextBoxKA = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "skntitleBarSearch0b93e461826d745",
        "height": "34dp",
        "id": "searchTextBoxKA",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": 0,
        "onDone": AS_TextField_16aff4e250b44308ab26f0a28685ca32,
        "onTextChange": AS_TextField_f2725dc63914439197fec3239d9cfb8a,
        "placeholder": kony.i18n.getLocalizedString("i18n.locateus.frmLocatorKA.locatorSearchTextField_placeholder"),
        "right": 0,
        "secureTextEntry": false,
        "skin": "skntitleBarSearch0b93e461826d745",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "100%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [13, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "skntitleBarSearch0b93e461826d745",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Image0ce8c61798e274f = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50%",
        "id": "Image0ce8c61798e274f",
        "isVisible": true,
        "left": "4dp",
        "skin": "sknslImage066c801c81f524f",
        "src": "search_icon.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    searchContainer0dccbeeef573940.add(
    searchTextBoxKA, Image0ce8c61798e274f);
    flxMainKA.add(
    flxTitleBarKA, searchContainer0dccbeeef573940);
    var flsScrollContainerKA = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "85%",
        "horizontalScrollIndicator": true,
        "id": "flsScrollContainerKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "98dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flsScrollContainerKA.setDefaultUnit(kony.flex.DP);
    var segEventListKA = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblCategoryKA": "Label",
            "lblDatefromKA": "8:00 AM",
            "lblDescriptionKA": "Demo of HR SaaS",
            "lblTimeKA": "8:00 AM"
        }, {
            "lblCategoryKA": "Label",
            "lblDatefromKA": "8:00 AM",
            "lblDescriptionKA": "Demo of HR SaaS",
            "lblTimeKA": "8:00 AM"
        }, {
            "lblCategoryKA": "Label",
            "lblDatefromKA": "8:00 AM",
            "lblDescriptionKA": "Demo of HR SaaS",
            "lblTimeKA": "8:00 AM"
        }, {
            "lblCategoryKA": "Label",
            "lblDatefromKA": "8:00 AM",
            "lblDescriptionKA": "Demo of HR SaaS",
            "lblTimeKA": "8:00 AM"
        }, {
            "lblCategoryKA": "Label",
            "lblDatefromKA": "8:00 AM",
            "lblDescriptionKA": "Demo of HR SaaS",
            "lblTimeKA": "8:00 AM"
        }, {
            "lblCategoryKA": "Label",
            "lblDatefromKA": "8:00 AM",
            "lblDescriptionKA": "Demo of HR SaaS",
            "lblTimeKA": "8:00 AM"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segEventListKA",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_6b3d0893cb3e4abc974366e523ce20ee,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "right": "0dp",
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxEventsInfoKA,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "15592c00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxEventsInfoKA": "flxEventsInfoKA",
            "lblCategoryKA": "lblCategoryKA",
            "lblDatefromKA": "lblDatefromKA",
            "lblDescriptionKA": "lblDescriptionKA",
            "lblTimeKA": "lblTimeKA"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flsScrollContainerKA.add(
    segEventListKA);
    frmEventListKA.add(
    flxMainKA, flsScrollContainerKA);
};

function frmEventListKAGlobals() {
    frmEventListKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEventListKA,
        "enabledForIdleTimeout": false,
        "id": "frmEventListKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_d410d99d42564016a5f8da9e2e96294a,
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
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};