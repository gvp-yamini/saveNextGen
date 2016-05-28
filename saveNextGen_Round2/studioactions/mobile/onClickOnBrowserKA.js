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