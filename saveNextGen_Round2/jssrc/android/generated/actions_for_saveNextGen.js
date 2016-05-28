//actions.js file 
function AS_AppEvents_45666d56900f477da4958b282225b1a2(eventobject) {
    pushRegister();
}
function AS_AppEvents_80ffe09073c7446f92321bf8995caf82(eventobject) {}
function AS_Button_02673f7acf9e49d0aa0bc0e279338b4f(eventobject) {
    frmDonateOptionsKA.show();
}
function AS_Button_074a6a29c67c437a8f58a7e9454d5146(eventobject) {
    function SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_True() {
        frmDashboardKA.show();
    }

    function SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_Callback() {
        SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertIcon": "opportunities.png",
        "message": "Thanks for registering!!!!\n",
        "alertHandler": SHOW_ALERT_ide_onClick_c9b281a1b43f4461b88ae8c025ed7018_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}
function AS_Button_3f06f6818d7c4d7c94d0bcc83438dc1a(eventobject) {
    frmRegisterKA.show();
}
function AS_Button_569e4ae1e0354bd389322fee3363ebd5(eventobject) {
    frmEventListKA.show();
}
function AS_Button_67bafd4c54974fea83b89340d70de207(eventobject) {
    alert("Thanking for saving a life,We will reach you!!!!");
}
function AS_Button_6b4959f0b04d42bc905af4c6604958a9(eventobject) {
    alert("Thank You for joining this Event:)");
}
function AS_Button_7b8fb67d86074a2ea5c76319511f1902(eventobject) {
    frmDashboardKA.btnUpcomingKA.skin = sknbtn130serifKA;
    frmDashboardKA.btnNearbyKA.skin = sknbtn130serifinactive;
    frmDashboardKA.flxSelectedKA.isVisible = true;
    frmDashboardKA.flxSelected2KA.isVisible = false;
    setUpcomingEventsData();
}
function AS_Button_7df0448b2f374fb2b25b133ad47d0560(eventobject) {
    frmEventsDetails.show();
}
function AS_Button_8beda583f1a44ecf97ffcae58f58f84a(eventobject) {
    function SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_True() {
        frmDashboardKA.show();
    }

    function SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_Callback() {
        SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertIcon": "opportunities.png",
        "message": "Thanks for donating!!!\nYour lifespan has been increased by 3years!!!",
        "alertHandler": SHOW_ALERT__f2fc74577e9c472aa76aa3583daac40b_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}
function AS_Button_a0d55e6b574c4040afe29826326d886a(eventobject) {
    frmMapKA.show();
}
function AS_Button_a2b67f6eddff4f6295911cc099298e11(eventobject) {
    frmDonateOptionsKA.show();
}
function AS_Button_f648c2f6cf7f4031bcb0edcfa183ce1a(eventobject) {
    frmDashboardKA.btnUpcomingKA.skin = sknbtn130serifinactive;
    frmDashboardKA.btnNearbyKA.skin = sknbtn130serifKA;
    frmDashboardKA.flxSelectedKA.isVisible = false;
    frmDashboardKA.flxSelected2KA.isVisible = true;
    setNearByEventsData();
}
function AS_FlexContainer_04033a9a03644b528170573bfa17c304(eventobject, x, y) {
    showMenu();
}
function AS_FlexContainer_3304165fec0345c689b6df3ccc15a35e(eventobject) {
    closeMenu();
    frmEventListKA.show();
}
function AS_FlexContainer_38fed75788e44b55a840f5bb9aa9ae98(eventobject, x, y) {
    showMenu();
}
function AS_FlexContainer_4368101952684295864b32d98a786ec1(eventobject) {
    closeMenu();
    frmHowWeWork.show();
}
function AS_FlexContainer_437e8e01f68e4d83b1a9a0a84946dc8b(eventobject) {
    frmDonateKA.show();
}
function AS_FlexContainer_4f270c141164484aa2ab5333837b33c0(eventobject, x, y) {
    showMenu();
}
function AS_FlexContainer_5e2b99b104bd48fd80df56b9ea3435ec(eventobject) {
    closeMenu();
    frmDonateOptionsKA.show();
}
function AS_FlexContainer_9d3ce33147df4b1cb0fdbed807abce84(eventobject) {
    function callback() {}
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Call",
        "yesLabel": "Call",
        "noLabel": "Cancel",
        "alertIcon": "phone_icon_inactive.png",
        "message": frmEventsDetails.lblNumberKA.text,
        "alertHandler": callback()
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}
function AS_FlexContainer_a71cda7b9cec41bc8041c01a564ec7da(eventobject, x, y) {
    showMenu();
}
function AS_FlexContainer_aca573fb4911406e849959e25524a2f6(eventobject) {
    AS_Image_d50fbcf858c44c9dbddfbf77fc3e0ebc(null, null, null);
}
function AS_FlexContainer_bbfe9f8604104a8ab2b88f6cb2ff36a8(eventobject, x, y) {
    showMenu();
}
function AS_FlexContainer_bdbd82a3b7cb490e877293376cd3b19d(eventobject) {
    closeMenu();
    frmSaveFromAxe.show();
}
function AS_FlexContainer_bf2508394572479bb8379718c3fd2f02(eventobject) {
    closeMenu();
    frmDashboardKA.show();
}
function AS_FlexContainer_c58a65993c1d45448ed6635f903d952b(eventobject) {
    closeMenu();
    frmContactUsKA.show();
}
function AS_FlexContainer_e355c9f0376048b1b33e2a067cbe0920(eventobject, x, y) {
    showMenu();
}
function AS_Form_0f35b7e1f0974e4baa934603ba2cddfa(eventobject) {
    setUpcomingEventsData();
    settingEventsList();
}
function AS_Form_e2a7b196dcc44aa5b660e96325cfbd92(eventobject) {
    frmDashboardKA.segImagesKA.pageSkin = "sknBackgroundKA";
}
function AS_Segment_6b3d0893cb3e4abc974366e523ce20ee(eventobject, sectionNumber, rowNumber) {
    navigatetoEventsDetailsEvents();
}
function AS_TextField_16aff4e250b44308ab26f0a28685ca32(eventobject, changedtext) {
    var searchText = frmEventListKA.searchTextBoxKA.text;
    var searchLbl = "location";
    masterDataSearch("frmEventListKA", "segEventListKA", searchText, searchLbl);
}
function AS_TextField_f2725dc63914439197fec3239d9cfb8a(eventobject, changedtext) {
    var searchText = frmEventListKA.searchTextBoxKA.text;
    if (searchText === "" || searchText === " ") {
        var searchLbl = "location";
        masterDataSearch("frmEventListKA", "segEventListKA", searchText, searchLbl);
    }
}
function eventListPreshow(eventobject) {
    return AS_Form_d410d99d42564016a5f8da9e2e96294a(eventobject);
}

function AS_Form_d410d99d42564016a5f8da9e2e96294a(eventobject) {
    frmEventListKA.searchTextBoxKA.text = "";
    //settingEventsList();
}
function navigateToEventsDetailsScreen(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_125ce933948644f3b98b8bdc5e878246(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_125ce933948644f3b98b8bdc5e878246(eventobject, sectionNumber, rowNumber) {
    navigatetoEventsDetailsEvents();
}
function onClickBackBrowserKA(eventobject) {
    return AS_Button_32010844b3dd4729970382af0fbf4072(eventobject);
}

function AS_Button_32010844b3dd4729970382af0fbf4072(eventobject) {
    frmEventsDetails.show();
}
function onClickJoinEvent(eventobject) {
    return AS_Button_f9094e41e1764bba8e2714089ffcf3a8(eventobject);
}

function AS_Button_f9094e41e1764bba8e2714089ffcf3a8(eventobject) {
    alert("Thanks You for joining :)");
}
function onClickList(eventobject) {
    return AS_Button_e8e0f8e01d5f45bda26316a5abd5804e(eventobject);
}

function AS_Button_e8e0f8e01d5f45bda26316a5abd5804e(eventobject) {
    frmEventListKA.show();
}
function onClickOnBrowserKA(eventobject) {
    return AS_Form_d5b2951006ad4580a0109b2940945099(eventobject);
}

function AS_Form_d5b2951006ad4580a0109b2940945099(eventobject) {
    var URLAddress = "https://www.google.co.in/maps/place/Hyderabad";
    var requestURLConfig = {
        "URL": URLAddress,
        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
    }
    frmBrowserKA.broweserWidgetKA.requestURLConfig = requestURLConfig;
}
function onClickOnFeedback(eventobject) {
    return AS_Button_94e787f650b24ccaa97e5aa18dfd0833(eventobject);
}

function AS_Button_94e787f650b24ccaa97e5aa18dfd0833(eventobject) {
    alert("Thank you for your valuable Feedback :)");
}
function onDetailsBack(eventobject) {
    return AS_Button_baf118006bb44cb48c0058594bc9cebc(eventobject);
}

function AS_Button_baf118006bb44cb48c0058594bc9cebc(eventobject) {
    if (kony.application.getPreviousForm().id == "frmDashboardKA") {
        frmDashboardKA.show();
    } else {
        frmEventListKA.show();
    }
}
function onMapbtnClick(eventobject) {
    return AS_Button_6a0c12167ef348cd88e611e28e7fbc69(eventobject);
}

function AS_Button_6a0c12167ef348cd88e611e28e7fbc69(eventobject) {
    frmMapKA.show();
}
function onMapHideKA(eventobject) {
    return AS_Form_a93a4999b62546e4a9fc67b7f0d4d8e9(eventobject);
}

function AS_Form_a93a4999b62546e4a9fc67b7f0d4d8e9(eventobject) {
    locatorHide();
}
function OnMapiconClickKA(eventobject, x, y) {
    return AS_Image_d50fbcf858c44c9dbddfbf77fc3e0ebc(eventobject, x, y);
}

function AS_Image_d50fbcf858c44c9dbddfbf77fc3e0ebc(eventobject, x, y) {
    frmBrowserKA.show();
}
function onMapInit(eventobject) {
    return AS_Form_616c2ef9c3c8496f99f41c24c9aecb63(eventobject);
}

function AS_Form_616c2ef9c3c8496f99f41c24c9aecb63(eventobject) {
    locatorInit();
}
function onMapPostShow(eventobject) {
    return AS_Form_b3066292d6b5458ca8e83566628fd8d3(eventobject);
}

function AS_Form_b3066292d6b5458ca8e83566628fd8d3(eventobject) {
    function SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_True() {
        userAllowedLocation();
    }

    function SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_False() {}

    function SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_Callback(response) {
        if (response == true) {
            SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_True()
        } else {
            SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_False()
        };
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Current Location",
        "yesLabel": "Allow",
        "noLabel": "Don't Allow",
        "message": "saveNextGen would like to use your current location",
        "alertHandler": SHOW_ALERT__765ddf33f5ce41fdb9489f774ebe6745_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
    locatorPostShow();
}
function onMapPreshowKA(eventobject) {
    return AS_Form_0454c367ee374936a34a50a106dd7746(eventobject);
}

function AS_Form_0454c367ee374936a34a50a106dd7746(eventobject) {
    locatorPreShow();
}
function onSearchDone(eventobject, changedtext) {
    return AS_TextField_7778272f2343445eb1b97b3cffab6651(eventobject, changedtext);
}

function AS_TextField_7778272f2343445eb1b97b3cffab6651(eventobject, changedtext) {
    var searchText = frmEventListKA.searchTextBoxKA.text;
    var searchLbl = "location";
    masterDataSearch("frmEventListKA", "segEventListKA", searchText, searchLbl);
}
function OnSegRowClickDashboardKA(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_67488ea7c60d4268be8d80b4c93fbe2c(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_67488ea7c60d4268be8d80b4c93fbe2c(eventobject, sectionNumber, rowNumber) {
    navigatetoEventsDetailsDash();
}
function onSubmitDetailsKA(eventobject) {
    return AS_Button_f60a8563eaee43ecb0bf9beb42e9174e(eventobject);
}

function AS_Button_f60a8563eaee43ecb0bf9beb42e9174e(eventobject) {
    alert("Thanks for joining us!!");
}