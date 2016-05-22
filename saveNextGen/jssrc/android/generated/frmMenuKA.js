function addWidgetsfrmMenuKA() {
    frmMenuKA.setDefaultUnit(kony.flex.DP);
    var flxMenuContainerKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMenuContainerKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuContainerKA.setDefaultUnit(kony.flex.DP);
    var flxMenuBkgKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMenuBkgKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox05e5c92f4bfc949",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuBkgKA.setDefaultUnit(kony.flex.DP);
    flxMenuBkgKA.add();
    var flxMenuKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMenuKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknHamburgerMenuKA",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    flxMenuKA.setDefaultUnit(kony.flex.DP);
    var FlexContainer003c9a1a3626f4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "130dp",
        "id": "FlexContainer003c9a1a3626f4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer003c9a1a3626f4d.setDefaultUnit(kony.flex.DP);
    var Image0ce8d84bfe59a4c = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80dp",
        "id": "Image0ce8d84bfe59a4c",
        "isVisible": true,
        "left": "10dp",
        "src": "aparna.png",
        "top": "0dp",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer07342f19e1e0049 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "128dp",
        "id": "FlexContainer07342f19e1e0049",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    FlexContainer07342f19e1e0049.setDefaultUnit(kony.flex.DP);
    var lblQouteKA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblQouteKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblRoundKA",
        "text": "SAVE  TREES",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblQouteKA043346bc1ccb54d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblQouteKA043346bc1ccb54d",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblRoundKA",
        "text": "PLANT  TREES",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblQouteKA013f788a99fe048 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopylblQouteKA013f788a99fe048",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblRoundKA",
        "text": "GO GREEN",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer07342f19e1e0049.add(
    lblQouteKA, CopylblQouteKA043346bc1ccb54d, CopylblQouteKA013f788a99fe048);
    FlexContainer003c9a1a3626f4d.add(
    Image0ce8d84bfe59a4c, FlexContainer07342f19e1e0049);
    var FlexDashboardScrollContainerKA0144efd60617e49 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": false,
        "height": "80%",
        "horizontalScrollIndicator": false,
        "id": "FlexDashboardScrollContainerKA0144efd60617e49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "1dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox081b5fb3b2e0841",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%"
    }, {}, {});
    FlexDashboardScrollContainerKA0144efd60617e49.setDefaultUnit(kony.flex.DP);
    var flxDashboardKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxDashboardKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_bf2508394572479bb8379718c3fd2f02,
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxDashboardKA.setDefaultUnit(kony.flex.DP);
    var Image05f589a09cc5744 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "Image05f589a09cc5744",
        "isVisible": true,
        "left": "20dp",
        "src": "tab_accounts_icon_inactive.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0ba2014a460a348 = new kony.ui.Label({
        "centerY": "53.56%",
        "id": "Label0ba2014a460a348",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblHeadingKA",
        "text": "Dashboard",
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
    flxDashboardKA.add(
    Image05f589a09cc5744, Label0ba2014a460a348);
    var flxEventsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxEventsKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_3304165fec0345c689b6df3ccc15a35e,
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxEventsKA.setDefaultUnit(kony.flex.DP);
    var CopyImage00bd2c0f7abbc4f = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopyImage00bd2c0f7abbc4f",
        "isVisible": true,
        "left": "20dp",
        "src": "calendar_ap.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel09d14938104e04d = new kony.ui.Label({
        "centerY": "46%",
        "id": "CopyLabel09d14938104e04d",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblHeadingKA",
        "text": "Events",
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
    flxEventsKA.add(
    CopyImage00bd2c0f7abbc4f, CopyLabel09d14938104e04d);
    var flxDonateKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxDonateKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_5e2b99b104bd48fd80df56b9ea3435ec,
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxDonateKA.setDefaultUnit(kony.flex.DP);
    var CopyImage063571cc3320747 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopyImage063571cc3320747",
        "isVisible": true,
        "left": "20dp",
        "src": "tab_deposits_icon_inactive.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0be7e6407b0a54b = new kony.ui.Label({
        "centerY": "46%",
        "id": "CopyLabel0be7e6407b0a54b",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblHeadingKA",
        "text": "Donate",
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
    flxDonateKA.add(
    CopyImage063571cc3320747, CopyLabel0be7e6407b0a54b);
    var flxSaveFromAxeKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxSaveFromAxeKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_bdbd82a3b7cb490e877293376cd3b19d,
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxSaveFromAxeKA.setDefaultUnit(kony.flex.DP);
    var CopyImage0f77ba3e2e13148 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopyImage0f77ba3e2e13148",
        "isVisible": true,
        "left": "20dp",
        "src": "flower_convert.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel02572930460b844 = new kony.ui.Label({
        "centerY": "46%",
        "id": "CopyLabel02572930460b844",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblHeadingKA",
        "text": "Save From Axe",
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
    flxSaveFromAxeKA.add(
    CopyImage0f77ba3e2e13148, CopyLabel02572930460b844);
    var flxHowWeWorkKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxHowWeWorkKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_4368101952684295864b32d98a786ec1,
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxHowWeWorkKA.setDefaultUnit(kony.flex.DP);
    var CopyImage03fe6018361d74e = new kony.ui.Image2({
        "centerY": "50.22%",
        "height": "30dp",
        "id": "CopyImage03fe6018361d74e",
        "isVisible": true,
        "left": "20dp",
        "src": "volunteer_convert.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0ae3dc3535ca44a = new kony.ui.Label({
        "centerY": "46%",
        "id": "CopyLabel0ae3dc3535ca44a",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblHeadingKA",
        "text": "Volunteer With Us",
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
    flxHowWeWorkKA.add(
    CopyImage03fe6018361d74e, CopyLabel0ae3dc3535ca44a);
    var flxContactKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxContactKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_c58a65993c1d45448ed6635f903d952b,
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxContactKA.setDefaultUnit(kony.flex.DP);
    var CopyImage048153e503e6f47 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopyImage048153e503e6f47",
        "isVisible": true,
        "left": "20dp",
        "src": "phone_icon_inactive.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0a8d346362d8f47 = new kony.ui.Label({
        "centerY": "46%",
        "id": "CopyLabel0a8d346362d8f47",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblHeadingKA",
        "text": "Contact Us",
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
    flxContactKA.add(
    CopyImage048153e503e6f47, CopyLabel0a8d346362d8f47);
    FlexDashboardScrollContainerKA0144efd60617e49.add(
    flxDashboardKA, flxEventsKA, flxDonateKA, flxSaveFromAxeKA, flxHowWeWorkKA, flxContactKA);
    flxMenuKA.add(
    FlexContainer003c9a1a3626f4d, FlexDashboardScrollContainerKA0144efd60617e49);
    flxMenuContainerKA.add(
    flxMenuBkgKA, flxMenuKA);
    frmMenuKA.add(
    flxMenuContainerKA);
};

function frmMenuKAGlobals() {
    frmMenuKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMenuKA,
        "enabledForIdleTimeout": false,
        "id": "frmMenuKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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