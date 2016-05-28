function onSearchDone(eventobject, changedtext) {
    return AS_TextField_7778272f2343445eb1b97b3cffab6651(eventobject, changedtext);
}

function AS_TextField_7778272f2343445eb1b97b3cffab6651(eventobject, changedtext) {
    var searchText = frmEventListKA.searchTextBoxKA.text;
    var searchLbl = "location";
    masterDataSearch("frmEventListKA", "segEventListKA", searchText, searchLbl);
}