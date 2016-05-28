var upcomingEvents = [{
    "eventId": "01",
    "eventDateTime": "22 May,2016",
    "date": "2016-05-22",
    "location": {
        "place": "APHB colony",
        "street": "Gachibowli",
        "city": "Hyderabad",
        "country": "India"
    },
    "contactNumber": "+91-8984445414",
    "time": "4:30 PM",
    "saplingCount": "50",
    "eventName": "vanamahotsava",
    "volunteerCount": "5",
    "organisationName": "Kony Private Limited",
    "occation": "companyEvent",
    "latitude": "17.4466",
    "longitude": "78.3573",
    "distance": "2 Km away",
    "distanceLabel": "2 Km"
}, {
    "eventId": "11",
    "eventDateTime": "27 May,2016",
    "date": "2016-05-27",
    "location": {
        "place": "Near RED FM station",
        "street": "Banjara hills",
        "city": "Hyderabad",
        "country": "India"
    },
    "contactNumber": "+91-7206426929",
    "time": "09:35 AM",
    "saplingCount": "935",
    "eventName": "Big Green Man Competition",
    "volunteerCount": "115",
    "organisationName": "Red FM",
    "occation": "Awareness Programme",
    "latitude": "17.41",
    "longitude": "78.43",
    "distance": "9.35 Km away",
    "distanceLabel": "9.35 Km"
}, {
    "eventId": "14",
    "eventDateTime": "27 May,2016",
    "date": "2016-05-27",
    "location": {
        "place": "Bio diversity",
        "street": "Gachibowli",
        "city": "Hyderabad",
        "country": "India"
    },
    "contactNumber": "+91-7206934569",
    "time": "9:30 AM",
    "saplingCount": "111",
    "eventName": "Pacha thoranam",
    "volunteerCount": "50",
    "organisationName": "Govt. Of Telangana",
    "occation": "Govt. Initiative",
    "latitude": "17.4291",
    "longitude": "78.3765",
    "distance": "9 Km away",
    "distanceLabel": "9 Km"
}];
var nearByData = [{
    "eventId": "12",
    "eventDateTime": "28 May,2016",
    "date": "2016-05-28",
    "location": {
        "place": "Near RED FM station",
        "street": "Banjara hills",
        "city": "Hyderabad",
        "country": "India"
    },
    "contactNumber": "+91-7206426929",
    "time": "09:35 AM",
    "saplingCount": "935",
    "eventName": "Go Green",
    "volunteerCount": "115",
    "organisationName": "Red FM",
    "occation": "Awareness Programme",
    "latitude": "17.41",
    "longitude": "78.43",
    "distance": "9.35 Km away",
    "distanceLabel": "9.35 Km"
}, {
    "eventId": "11",
    "eventDateTime": "27 May,2016",
    "date": "2016-05-27",
    "location": {
        "place": "Near RED FM station",
        "street": "Banjara hills",
        "city": "Hyderabad",
        "country": "India"
    },
    "contactNumber": "+91-7206426929",
    "time": "09:35 AM",
    "saplingCount": "935",
    "eventName": "Big Green Man Competition",
    "volunteerCount": "115",
    "organisationName": "Red FM",
    "occation": "Awareness Programme",
    "latitude": "17.41",
    "longitude": "78.43",
    "distance": "9.35 Km away",
    "distanceLabel": "9.35 Km"
}, {
    "eventId": "13",
    "eventDateTime": "28 May,2016",
    "date": "2016-05-28",
    "location": {
        "place": "Bio diversity",
        "street": "Gachibowli",
        "city": "Hyderabad",
        "country": "India"
    },
    "contactNumber": "+91-7206934569",
    "time": "9:30 AM",
    "saplingCount": "111",
    "eventName": "Pacha thoranam",
    "volunteerCount": "50",
    "organisationName": "Govt. Of Telangana",
    "occation": "Govt. Initiative",
    "latitude": "17.4291",
    "longitude": "78.3765",
    "distance": "9.35 Km away",
    "distanceLabel": "9.35 Km"
}, {
    "eventId": "10",
    "eventDateTime": "14 November,2016",
    "date": "2016-11-14",
    "location": {
        "place": "Near RED FM station",
        "street": "Banjara hills",
        "city": "Hyderabad",
        "country": "India"
    },
    "contactNumber": "+91-7206426929",
    "time": "09:35 AM",
    "saplingCount": "935",
    "eventName": "Big Green Man Competition",
    "volunteerCount": "115",
    "organisationName": "Red FM",
    "occation": "Awareness Programme",
    "latitude": "17.41",
    "longitude": "78.43",
    "distance": "9.35 Km away",
    "distanceLabel": "9.35 Km"
}];

function setUpcomingEventsData() {
    updateCurrentLatLong(callback);

    function callback() {
        var upcomingeventsList = [];
        var eventlistKA = upcomingEvents;
        var len = eventlistKA.length;
        for (var i = 0; i < len; i++) {
            var temp = eventlistKA[i]["location"]["place"] + ", " + eventlistKA[i]["location"]["street"];
            var dist = getOfflineDistanceBetweenLatAndLong(CURRENT_LATITUDE, CURRENT_LONGITUDE, parseFloat(eventlistKA[i]["latitude"]), parseFloat(eventlistKA[i]["longitude"]));
            upcomingeventsList.push({
                "id": eventlistKA[i].eventId,
                "eventDateTime": eventlistKA[i].eventDateTime,
                "location": temp,
                "away": (dist).toFixed(2) + " Km away",
                "originalDistance": (dist).toFixed(2)
            });
        }
        frmDashboardKA.segDetailsKA.widgetDataMap = {
            lblDatefromKA: "id",
            lblTimeKA: "eventDateTime",
            lblDescriptionKA: "location",
            lblCategoryKA: "away"
        };
        frmDashboardKA.segDetailsKA.setData(upcomingeventsList);
    }
}

function setNearByEventsData() {
    updateCurrentLatLong(callback);

    function callback() {
        var nearByeventsList = [];
        var eventlistKA = nearByData;
        var len = eventlistKA.length;
        for (var i = 0; i < len; i++) {
            var temp = eventlistKA[i]["location"]["place"] + ", " + eventlistKA[i]["location"]["street"];
            var dist = getOfflineDistanceBetweenLatAndLong(CURRENT_LATITUDE, CURRENT_LONGITUDE, parseFloat(eventlistKA[i]["latitude"]), parseFloat(eventlistKA[i]["longitude"]));
            nearByeventsList.push({
                "id": eventlistKA[i].eventId,
                "eventDateTime": eventlistKA[i].eventDateTime,
                "location": temp,
                "away": (dist).toFixed(2) + " Km away",
                "originalDistance": (dist).toFixed(2)
            });
        }
        nearByeventsList.sort(function(a, b) {
            return parseFloat(a.originalDistance) - parseFloat(b.originalDistance);
        });
        frmDashboardKA.segDetailsKA.widgetDataMap = {
            lblDatefromKA: "id",
            lblTimeKA: "eventDateTime",
            lblDescriptionKA: "location",
            lblCategoryKA: "away"
        };
        frmDashboardKA.segDetailsKA.setData(nearByeventsList);
    }
}