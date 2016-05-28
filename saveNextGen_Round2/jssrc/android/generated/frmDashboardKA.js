function addWidgetsfrmDashboardKA() {
    frmDashboardKA.setDefaultUnit(kony.flex.DP);
    var flxMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
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
        "onTouchEnd": AS_FlexContainer_4f270c141164484aa2ab5333837b33c0,
        "skin": "slFbox",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {}, {});
    FlexContainer0e5d45ad95a1747.setDefaultUnit(kony.flex.DP);
    var btnMenuKA = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50.00%",
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
    }, {});
    FlexContainer0e5d45ad95a1747.add(
    btnMenuKA);
    var lblTitleKA = new kony.ui.Label({
        "centerY": "50.22%",
        "id": "lblTitleKA",
        "isVisible": true,
        "left": "10dp",
        "skin": "skntitlelblKA",
        "text": "Dashboard",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTitleBarKA.add(
    FlexContainer0e5d45ad95a1747, lblTitleKA);
    var flxSecondaryKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxSecondaryKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSecondaryKA.setDefaultUnit(kony.flex.DP);
    var lblQouteKA = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblQouteKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblRoundKA",
        "text": "Make  our city a better place to live",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "325dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSecondaryKA.add(
    lblQouteKA);
    var segImagesKA = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ImgEventsKA": "banner.png"
        }, {
            "ImgEventsKA": "plantingtrees.png"
        }, {
            "ImgEventsKA": "protecttrees.png"
        }, {
            "ImgEventsKA": "earth.png"
        }, {
            "ImgEventsKA": "tree_clean.png"
        }, {
            "ImgEventsKA": "facts.png"
        }],
        "groupCells": false,
        "height": "249dp",
        "id": "segImagesKA",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": flxImagesKA,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "ImgEventsKA": "ImgEventsKA",
            "flxImagesKA": "flxImagesKA"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyflxSecondaryKA0c388ebfd4d9b41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "CopyflxSecondaryKA0c388ebfd4d9b41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxSecondaryKA0c388ebfd4d9b41.setDefaultUnit(kony.flex.DP);
    var btnUpcomingKA = new kony.ui.Button({
        "focusSkin": "sknbtn130serifKA",
        "height": "50dp",
        "id": "btnUpcomingKA",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_7b8fb67d86074a2ea5c76319511f1902,
        "skin": "sknbtn130serifKA",
        "text": "Upcoming Events",
        "top": "4dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnNearbyKA = new kony.ui.Button({
        "focusSkin": "sknbtn130serifinactive",
        "height": "50dp",
        "id": "btnNearbyKA",
        "isVisible": true,
        "left": "50.03%",
        "onClick": AS_Button_f648c2f6cf7f4031bcb0edcfa183ce1a,
        "skin": "sknbtn130serifinactive",
        "text": "Nearby Events",
        "top": "4dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer08afe725fa34442 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "FlexContainer08afe725fa34442",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "flxBackgroundKA",
        "top": "4dp",
        "width": "1%",
        "zIndex": 1
    }, {}, {});
    FlexContainer08afe725fa34442.setDefaultUnit(kony.flex.DP);
    FlexContainer08afe725fa34442.add();
    var flxSelectedKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxSelectedKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknFlxRoundKA",
        "top": "50dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxSelectedKA.setDefaultUnit(kony.flex.DP);
    flxSelectedKA.add();
    var flxSelected2KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxSelected2KA",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "sknFlxRoundKA",
        "top": "50dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxSelected2KA.setDefaultUnit(kony.flex.DP);
    flxSelected2KA.add();
    CopyflxSecondaryKA0c388ebfd4d9b41.add(
    btnUpcomingKA, btnNearbyKA, FlexContainer08afe725fa34442, flxSelectedKA, flxSelected2KA);
    var FlexScrollContainer0d05f41f1d1fc41 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "34%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0d05f41f1d1fc41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0d05f41f1d1fc41.setDefaultUnit(kony.flex.DP);
    var segDetailsKA = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "0dp",
        "centerX": "49.97%",
        "data": [{
            "lblCategoryKA": "3.06 Km away",
            "lblDatefromKA": "22 May,2016",
            "lblDescriptionKA": "APHB colony, Gachibowli",
            "lblTimeKA": "22 May,2016"
        }, {
            "lblCategoryKA": "9.13 Km away",
            "lblDatefromKA": "27 May,2016",
            "lblDescriptionKA": "Near RED FM station, Banjara hills",
            "lblTimeKA": "27 May,2016"
        }, {
            "lblCategoryKA": "3.76 Km away",
            "lblDatefromKA": "27 May,2016",
            "lblDescriptionKA": "Bio diversity, Gachibowli",
            "lblTimeKA": "27 May,2016"
        }],
        "groupCells": false,
        "id": "segDetailsKA",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_67488ea7c60d4268be8d80b4c93fbe2c,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowSkin": "Copyseg0e8f6a9515ca244",
        "rowTemplate": flxEventsInfoKA,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "3dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxEventsInfoKA": "flxEventsInfoKA",
            "lblCategoryKA": "lblCategoryKA",
            "lblDatefromKA": "lblDatefromKA",
            "lblDescriptionKA": "lblDescriptionKA",
            "lblTimeKA": "lblTimeKA"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer0d05f41f1d1fc41.add(
    segDetailsKA);
    flxMainKA.add(
    flxTitleBarKA, flxSecondaryKA, segImagesKA, CopyflxSecondaryKA0c388ebfd4d9b41, FlexScrollContainer0d05f41f1d1fc41);
    frmDashboardKA.add(
    flxMainKA);
};

function frmDashboardKAGlobals() {
    frmDashboardKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashboardKA,
        "bounces": false,
        "enabledForIdleTimeout": false,
        "id": "frmDashboardKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_e2a7b196dcc44aa5b660e96325cfbd92,
        "preShow": AS_Form_0f35b7e1f0974e4baa934603ba2cddfa,
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