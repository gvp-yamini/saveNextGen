//Type your code here
var easeIn = kony.anim.EASIN_IN;
var forwards = kony.anim.FILL_MODE_FORWARDS;
var sortedList = [];
var eventsList = [];
CURRENT_LATITUDE = 0;
CURRENT_LONGITUDE = 0;

function updateCurrentLatLong(callback) {
    function successcallback(response) {
        var latitude = response && response["coords"] && response["coords"]["latitude"];
        var longitude = response && response["coords"] && response["coords"]["longitude"];
        CURRENT_LATITUDE = latitude;
        CURRENT_LONGITUDE = longitude;
        //updated successfully;
        callback.call();
    }

    function errorcallback(positionerror) {
        var errorMesg = "Error code: " + positionerror.code;
        errorMesg = errorMesg + " message: " + positionerror.message
        alert(errorMesg);
        callback.call();
    }
    if (eventsList.length <= 0) {
        var positionoptions = {
            timeout: 900000
        }; // 15 secs 
        kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
    } else {
        callback.call();
    }
}

function settingEventsList() {
    updateCurrentLatLong(callback);

    function callback() {
        var eventlist = kony.saveNextGen.util.eventData;
        var len = kony.saveNextGen.util.eventData.length;
        for (var i = 0; i < len; i++) {
            var temp = eventlist[i]["location"]["place"] + ", " + eventlist[i]["location"]["street"];
            var dist = getOfflineDistanceBetweenLatAndLong(CURRENT_LATITUDE, CURRENT_LONGITUDE, parseFloat(eventlist[i]["latitude"]), parseFloat(eventlist[i]["longitude"]));
            eventsList.push({
                "id": eventlist[i].eventId,
                "eventDateTime": eventlist[i].eventDateTime,
                "location": temp,
                "away": (dist).toFixed(2) + " Km away",
                "originalDistance": (dist).toFixed(2)
            });
        }
        sortedList = eventsList;
        sortedList.sort(function(a, b) {
            return parseFloat(a.originalDistance) - parseFloat(b.originalDistance);
        });
        frmEventListKA.segEventListKA.widgetDataMap = {
            lblDatefromKA: "id",
            lblTimeKA: "eventDateTime",
            lblDescriptionKA: "location",
            lblCategoryKA: "away"
        };
        frmEventListKA.segEventListKA.setData(sortedList);
    }
}

function masterDataSearch(formObj, segName, searchText, searchLbl) {
    try {
        var gblListSegData = eventsList;
        frmEventListKA.segEventListKA.widgetDataMap = {
            lblDatefromKA: "id",
            lblTimeKA: "eventDateTime",
            lblDescriptionKA: "location",
            lblCategoryKA: "away"
        };
        if (searchText && searchText.length >= 1) {
            var newSegData = [];
            var tempArray = [];
            var j = 0;
            for (var i = 0; i < gblListSegData.length; i++) {
                var temp = gblListSegData[i];
                var event = temp[searchLbl];
                if (event.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
                    newSegData.push(temp);
                    j++;
                }
            }
            if (j == 0) {
                alert("no records to view");
            } else {
                frmEventListKA.segEventListKA.setData(newSegData);
            }
        } else {
            var temp = [];
            frmEventListKA.segEventListKA.setData(gblListSegData);
        }
    } catch (err) {
        alert("error while doing search");
    }
}

function getCompleteRecord(selId) {
    var records = kony.saveNextGen.util.eventData;
    var len = records.length;
    for (var i = 0; i < len; i++) {
        if (selId == records[i].eventId) {
            return records[i];
        }
    }
}

function navigatetoEventsDetailsEvents() {
    var selectedRecord = frmEventListKA.segEventListKA.selectedItems[0];
    var completeRecord = getCompleteRecord(selectedRecord["id"]);
    frmEventsDetails.lblTitleKA.text = completeRecord["eventName"];
    frmEventsDetails.lblVolunteeresKA.text = completeRecord["volunteerCount"] + " Going";
    frmEventsDetails.lblDateKA.text = completeRecord["date"];
    frmEventsDetails.lblTimeKA.text = completeRecord["time"];
    frmEventsDetails.lbllocationKA.text = completeRecord["location"]["place"] + ", " + completeRecord["location"]["street"];
    frmEventsDetails.lblSaplingsCountKA.text = completeRecord["saplingCount"] + " Sapplings";
    frmEventsDetails.lblNumberKA.text = completeRecord["contactNumber"];
    frmEventsDetails.show();
}

function navigatetoEventsDetailsDash() {
    var selectedRecord = frmDashboardKA.segDetailsKA.selectedItems[0];
    var completeRecord = getCompleteRecord(selectedRecord["id"]);
    frmEventsDetails.lblTitleKA.text = completeRecord["eventName"];
    frmEventsDetails.lblVolunteeresKA.text = completeRecord["volunteerCount"] + " Going";
    frmEventsDetails.lblDateKA.text = completeRecord["date"];
    frmEventsDetails.lblTimeKA.text = completeRecord["time"];
    frmEventsDetails.lbllocationKA.text = completeRecord["location"]["place"] + ", " + completeRecord["location"]["street"];
    frmEventsDetails.lblSaplingsCountKA.text = completeRecord["saplingCount"] + " Sapplings";
    frmEventsDetails.lblNumberKA.text = completeRecord["contactNumber"];
    frmEventsDetails.show();
}

function locatorInit() {
    userAgent = kony.os.userAgent();
}

function locatorPreShow() {
    addLocations();
    kony.print("preshow");
}
var bothLocationData = []; // holds full data of map
// frmLocatorKA init
function locatorInit() {
    userAgent = kony.os.userAgent();
}

function addLocations() {
    var segmentData = [];
    var locationData = [];
    var locationList = kony.saveNextGen.util.eventData;
    for (var i = 0; i < locationList.length; i++) {
        var address = locationList[i]["location"]["place"] + ", " + locationList[i]["location"]["street"];
        locationData.push({
            "name": locationList[i].eventName,
            "lon": locationList[i].longitude,
            "lat": locationList[i].latitude,
            "desc": address,
            "image": "map_locator_img.png"
        });
    }
    frmMapKA.locatorMapKA.locationData = locationData;
}
// frmLocatorKA preShow
function locatorPreShow() {
    addLocations();
    kony.print("preshow");
}
// frmLocatorKA postShow
function locatorPostShow() {
    kony.print("coming soon");
}
// frmLocatorKA onHide
function locatorHide() {
    kony.print("coming soon");
}
// Select "Allow" on alert modal
function userAllowedLocation() {
    kony.print("coming soon");
}

function getOfflineDistanceBetweenLatAndLong(lat1, lon1, lat2, lon2) {
    //this should be always the lat and long values other we might expect undefined behaviour
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}