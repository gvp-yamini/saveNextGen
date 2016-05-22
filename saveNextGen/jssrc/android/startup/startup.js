//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "savNextGen",
    appName: "saveNextGen",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.17.61",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "savNextGen",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "http://pmqa.konylabs.net:80/savNextGen/MWServlet",
    secureurl: "http://pmqa.konylabs.net:80/savNextGen/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrListTmplKA();
    initializesegEventListTempKA();
    initializetmpSegDashboardKA();
    initializetmpSegImagesKA();
    frmBrowserKAGlobals();
    frmContactUsKAGlobals();
    frmDashboardKAGlobals();
    frmDonateKAGlobals();
    frmDonateOptionsKAGlobals();
    frmEventListKAGlobals();
    frmEventsDetailsGlobals();
    frmHowWeWorkGlobals();
    frmMapKAGlobals();
    frmMenuKAGlobals();
    frmRegisterKAGlobals();
    frmSaveFromAxeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmDashboardKA.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("null", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;