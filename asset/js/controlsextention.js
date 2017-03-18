var AutoCom = 'AutoCom';
var Grid = 'Grid';
var Combobox = 'ComboBox';
AppControlFacility = function () {

};


////////// onAdditionalDataSend ///////////
AppControlFacility.prototype.onAdditionalData = function (selectorItem) {
    return {
        text: selectorItem.filter.filters[0].value
    };
};

//////////// onSelectDataItem //////////////
AppControlFacility.prototype.onSelectDataItem = function (e) {
    if (e.item != null) {

        var selectorItem = e.sender.wrapper[0].nextElementSibling;
        var col = AppControlFacility.getPropertyValueByCustomType(this);
        var dataItem = this.dataItem(e.item.index());
        var p = $(selectorItem);
        $(p).val(dataItem[col]);
    }
};

AppControlFacility.prototype.getPropertyValueByCustomType = function (parent) {
    var type = parent.element.attr('customType');
    var text = "";
    switch (type) {
        case "SimpleProduct":
            return "Isin";
            break;
        case "Portfolio":
            text = "";
            break;
        case "TransactionType":
            text = "Code";
            break;
        case "Operator":
            text = "ConditionTypeCode";
            break;
        case "ManagementType":
            text = "ManagementTypeCode";
            break;
        case "AssetType":
            text = "AssetTypeCode";
            break;
        default:
            text = "";
    }
    return text;
};

AppControlFacility.prototype.getName = function () {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((this).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};

var AppControlFacility = new AppControlFacility();


