//Type your code here
var easeIn = kony.anim.EASIN_IN;
var forwards = kony.anim.FILL_MODE_FORWARDS;
var eventsList = [];

function settingEventsList() {
    var eventlist = kony.saveNextGen.util.eventData;
    var len = kony.saveNextGen.util.eventData.length;
    for (var i = 0; i < len; i++) {
        var temp = eventlist[i]["location"]["place"] + ", " + eventlist[i]["location"]["street"];
        eventsList.push({
            "id": eventlist[i].eventId,
            "eventDateTime": eventlist[i].eventDateTime,
            "location": temp,
            "away": eventlist[i].distance
        });
    }
    frmEventListKA.segEventListKA.widgetDataMap = {
        lblDatefromKA: "id",
        lblTimeKA: "eventDateTime",
        lblDescriptionKA: "location",
        lblCategoryKA: "away"
    };
    frmEventListKA.segEventListKA.setData(eventsList);
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