function AS_TextField_f2725dc63914439197fec3239d9cfb8a(eventobject, changedtext) {
    var searchText = frmEventListKA.searchTextBoxKA.text;
    if (searchText === "" || searchText === " ") {
        var searchLbl = "location";
        masterDataSearch("frmEventListKA", "segEventListKA", searchText, searchLbl);
    }
}