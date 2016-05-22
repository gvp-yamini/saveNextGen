function addWidgetsfrmEventsDetails() {
    frmEventsDetails.setDefaultUnit(kony.flex.DP);
    var frmFlexMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "frmFlexMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    frmFlexMainKA.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_Button_baf118006bb44cb48c0058594bc9cebc,
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
    var lblEventListKA = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "lblEventListKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "skntitlelblKA",
        "text": "Events",
        "top": 10,
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    }, {
        "showProgressIndicator": true
    });
    flexHeader.add(
    btnBackKA, lblEventListKA, btnRegistrationKA);
    var flxContainerKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "93%",
        "id": "flxContainerKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "52dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainerKA.setDefaultUnit(kony.flex.DP);
    var lblTitleKA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitleKA",
        "isVisible": true,
        "skin": "sknlblHeadingKA",
        "text": "Vanamahotsav",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ImgmainKA = new kony.ui.Image2({
        "centerX": "49.38%",
        "height": "187dp",
        "id": "ImgmainKA",
        "isVisible": true,
        "left": "123dp",
        "skin": "slImage",
        "src": "banner.png",
        "top": "43dp",
        "width": "342dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0daeeb599e0a445 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "200dp",
        "id": "FlexContainer0daeeb599e0a445",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "251dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0daeeb599e0a445.setDefaultUnit(kony.flex.DP);
    var flxVolunteerKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxVolunteerKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "right": "5dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxVolunteerKA.setDefaultUnit(kony.flex.DP);
    var Image014b33587a75a47 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "Image014b33587a75a47",
        "isVisible": true,
        "right": "10dp",
        "skin": "slImage",
        "src": "ic_group_black.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblVolunteeresKA = new kony.ui.Label({
        "centerY": "50%",
        "height": "40dp",
        "id": "lblVolunteeresKA",
        "isVisible": true,
        "right": "20dp",
        "skin": "sknEventslblKA",
        "text": "4 Going",
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
    flxVolunteerKA.add(
    Image014b33587a75a47, lblVolunteeresKA);
    var flxDateKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxDateKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "48%",
        "zIndex": 1
    }, {}, {});
    flxDateKA.setDefaultUnit(kony.flex.DP);
    var ImgCalendarKA = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "ImgCalendarKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_date_range_black.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDateKA = new kony.ui.Label({
        "centerY": "50.00%",
        "id": "lblDateKA",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknEventslblKA",
        "text": "Label",
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
    flxDateKA.add(
    ImgCalendarKA, lblDateKA);
    var flxTimeKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flxTimeKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "150dp",
        "zIndex": 1
    }, {}, {});
    flxTimeKA.setDefaultUnit(kony.flex.DP);
    var lblTimeKA = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTimeKA",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknEventslblKA",
        "text": "Label",
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
    var imgTimeKA = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "imgTimeKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_schedule_black.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTimeKA.add(
    lblTimeKA, imgTimeKA);
    var flxlocationKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxlocationKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40dp",
        "onClick": AS_FlexContainer_aca573fb4911406e849959e25524a2f6,
        "skin": "slFbox",
        "top": "100dp",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    flxlocationKA.setDefaultUnit(kony.flex.DP);
    var lbllocationKA = new kony.ui.Label({
        "id": "lbllocationKA",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknEventslblKA",
        "text": "Label",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxlocationKA.add(
    lbllocationKA);
    var imglocationKA = new kony.ui.Image2({
        "height": "30dp",
        "id": "imglocationKA",
        "isVisible": true,
        "left": "10dp",
        "onTouchStart": AS_Image_d50fbcf858c44c9dbddfbf77fc3e0ebc,
        "skin": "slImage",
        "src": "ic_location_on_black.png",
        "top": "100dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxSaplingsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxSaplingsKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "right": "10dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxSaplingsKA.setDefaultUnit(kony.flex.DP);
    var CopyImgCalendarKA077d0029b142143 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "CopyImgCalendarKA077d0029b142143",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_local_florist_original.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSaplingsCountKA = new kony.ui.Label({
        "centerY": "50%",
        "height": "40dp",
        "id": "lblSaplingsCountKA",
        "isVisible": true,
        "right": "20dp",
        "skin": "sknEventslblKA",
        "text": "250 Saplings",
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
    flxSaplingsKA.add(
    CopyImgCalendarKA077d0029b142143, lblSaplingsCountKA);
    FlexContainer0daeeb599e0a445.add(
    flxVolunteerKA, flxDateKA, flxTimeKA, flxlocationKA, imglocationKA, flxSaplingsKA);
    var lblDouwanttojoinusKA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblDouwanttojoinusKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknEventslblKA",
        "text": "Do you want to join the event ??",
        "top": "420dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnJoinEvent = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnKA",
        "height": "40dp",
        "id": "btnJoinEvent",
        "isVisible": true,
        "left": "51dp",
        "onClick": AS_Button_6b4959f0b04d42bc905af4c6604958a9,
        "skin": "sknbtnKA",
        "text": "Join Event",
        "top": "460dp",
        "width": "200dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flxContactUsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flxContactUsKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "onClick": AS_FlexContainer_9d3ce33147df4b1cb0fdbed807abce84,
        "skin": "slFbox",
        "top": "515dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flxContactUsKA.setDefaultUnit(kony.flex.DP);
    var ImgContactUsKA = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "ImgContactUsKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_phone_black.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNumberKA = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblNumberKA",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknEventslblKA",
        "text": "Label",
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
    flxContactUsKA.add(
    ImgContactUsKA, lblNumberKA);
    flxContainerKA.add(
    lblTitleKA, ImgmainKA, FlexContainer0daeeb599e0a445, lblDouwanttojoinusKA, btnJoinEvent, flxContactUsKA);
    frmFlexMainKA.add(
    flexHeader, flxContainerKA);
    frmEventsDetails.add(
    frmFlexMainKA);
};

function frmEventsDetailsGlobals() {
    frmEventsDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEventsDetails,
        "enabledForIdleTimeout": false,
        "id": "frmEventsDetails",
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