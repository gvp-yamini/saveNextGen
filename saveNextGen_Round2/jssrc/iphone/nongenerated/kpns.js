kpnsURL = "http://appsqa.konylabs.net/kpns";
deviceID = kony.os.deviceInfo().deviceid;

function subscribeKPNS(regId, ostype) {
    var sub = {
        "sid": regId,
        "appId": "100000002edca5207",
        "ufid": "appukedarisetti@gmail.com",
        "osType": ostype,
        "deviceId": deviceID
    };
    var inp = {
        "subscriptionService": {
            "subscribe": sub
        }
    };
    var myhttpheaders = {
        "Content-Type": "application/json"
    };
    var paramTab = {
        postdata: JSON.stringify(inp),
        httpheaders: myhttpheaders
    };
    var url = kpnsURL + "/subscription";
    kony.net.invokeServiceAsync(url, paramTab, KPNSregCallback);
}

function KPNSregCallback(status, result) {
    if (status == 400) {
        kony.print("$#." + JSON.stringify(result));
        var tmp = result["subscriptionResponse"];
        ksid = tmp["ksid"];
        if (tmp["statusCode"] == 200) {
            alert("Device is now subscribed to KPNS Server");
            //frmHome.btnGeo.setVisibility(true);
        } else alert("Failed to subscribe to KPNS Server!!" + tmp["message"]);
    }
}

function fetchMsgSucessCallback(status, fetchMessage) {
    frmFetchMessage.msgID.text = frmFetchMsgs["segFetchMsgs"]["selectedItems"][0]["msgID"];
    frmFetchMessage.content.text = fetchMessage["content"];
    frmFetchMessage.show();
    kony.application.dismissLoadingScreen();
};

function segFetchMsgClick(eventobject, sectionNumber, rowNumber) {
    var fid = frmFetchMsgs["segFetchMsgs"]["selectedItems"][0]["msgID"];
    var url = kpnsURL + "/service/entrydata/content/" + fid;
    kony.net.invokeServiceAsync(url, {}, fetchMsgSucessCallback);
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
};

function fetchMessagesSucessCalllback(status, fetchMsgs) {
    if (status == 400) {
        if (fetchMsgs != null && fetchMsgs != undefined && fetchMsgs["messages"] != null && fetchMsgs["messages"] != undefined) {
            var frmFetchMsgs_segFetchMsgs_temp = [];
            var msg = "";
            for (var i1 = 0; i1 < fetchMsgs["messages"].length; i1++) {
                msg = fetchMsgs["messages"][i1]["content"];
                if (msg.length > 10) msg = msg.substring(0, 9) + "...";
                frmFetchMsgs_segFetchMsgs_temp.push({
                    "content": msg,
                    "lblmsgKey": "MessageId:",
                    "lblufidkey": "Message:",
                    "msgID": fetchMsgs["messages"][i1]["fetchId"]
                })
            }
            frmFetchMsgs.segFetchMsgs.setData(frmFetchMsgs_segFetchMsgs_temp);
        } else kony.print("ERROR" + JSON.stringify(fetchMsgs));
        frmFetchMsgs.show();
        kony.application.dismissLoadingScreen();
    }
};

function fetchMessagesonClick(eventobject) {
    var mailId = frmHome.txtMail.text;
    var start = 1;
    var perpage = 10;
    var inp = {
        "ufid": mailId,
        "appId": kony.servicesapp.APP_ID,
        "startElement": start,
        "elementsPerPage": perpage
    };
    var myhttpheaders = {
        "Content-Type": "application/json"
    };
    var paramTab = {
        postdata: JSON.stringify(inp),
        httpheaders: myhttpheaders
    };
    var url = kpnsURL + "/service/entrydata/fetchmessages";
    kony.print("url:" + url);
    kony.net.invokeServiceAsync(url, paramTab, fetchMessagesSucessCalllback);
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
};

function sendGeoLoction() {
    var inp = {
        "ksid": ksid,
        "latitude": lati,
        "locname": "",
        "longitude": longi
    };
    var myhttpheaders = {
        "Content-Type": "application/json"
    };
    var paramTab = {
        postdata: JSON.stringify(inp),
        httpheaders: myhttpheaders
    };
    var url = kpnsURL + "/service/geolocupdate";
    kony.net.invokeServiceAsync(url, paramTab, geoRegCallback);
}

function geoRegCallback(status, result) {
    if (status == 400) {
        kony.print("$#." + JSON.stringify(result));
        //alert("result:"+result);
        if ((result["statusCode"] == 200)) alert("Geolocation updated to KPNS sucessfully!!");
        else alert("Geolocation updated to KPNS Failed!!");
    }
}

function successcallback(position) {
    lati = position.coords.latitude;
    longi = position.coords.longitude;
    //alert("Latitude :"+lati+" Longitude : "+longi+" ksid "+ksid);
    sendGeoLoction();
}

function errorcallback(positionerror) {
    var errorMesg = "Error code: " + positionerror.code;
    errorMesg = errorMesg + " message: " + positionerror.message
    alert(errorMesg);
}

function sendViewMsgStatus(fetchid) {
    var url = kpnsURL + "/service/entrydata/status/" + fetchid;
    kony.net.invokeServiceAsync(url, {}, satusCallback);
}

function satusCallback(status, result) {
    if (status == 400) kony.print("Status" + status);
}

function unsubscribeKPNS() {
    var sub = {
        "ksid": ksid
    };
    var inp = {
        "subscriptionService": {
            "unsubscribe": sub
        }
    };
    var myhttpheaders = {
        "Content-Type": "application/json"
    };
    var paramTab = {
        postdata: JSON.stringify(inp),
        httpheaders: myhttpheaders
    };
    var url = kpnsURL + "/subscription";
    kony.net.invokeServiceAsync(url, paramTab, KPNSunregCallback);
}

function KPNSunregCallback(status, result) {
    if (status == 400) {
        kony.print("$#." + JSON.stringify(result));
        var tmp = result["subscriptionResponse"];
        ksid = tmp["ksid"];
        if ((tmp["statusCode"] == 200)) {
            alert("Device unsubscribed from KPNS Server sucessfully..");
        } else alert("Failed to unsubscribe from KPNS Server!!" + tmp["message"]);
    }
}

function pushRegister() {
    var devName = kony.os.deviceInfo().name;
    //alert("devName" + devName);
    if (devName == "android") {
        callbackAndroidSetCallbacks();
        callbackAndroidRegister();
    } else if ((devName == "iPhone") || (devName == "iPhone Simulator")) {
        callbackiPhoneSetCallbacks();
        callbackiPhoneRegister();
    }
}