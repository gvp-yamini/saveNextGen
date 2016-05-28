function AS_TextField_16aff4e250b44308ab26f0a28685ca32(eventobject, changedtext) {
    var searchText = frmEventListKA.searchTextBoxKA.text;
    var searchLbl = "location";
    masterDataSearch("frmEventListKA", "segEventListKA", searchText, searchLbl);
}