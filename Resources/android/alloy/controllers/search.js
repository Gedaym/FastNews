function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.search = Ti.UI.createWindow({
        id: "search"
    });
    $.__views.search && $.addTopLevelView($.__views.search);
    $.__views.textField = Ti.UI.createTextField({
        id: "textField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.search.add($.__views.textField);
    $.__views.searchButton = Ti.UI.createButton({
        id: "searchButton",
        title: "Search"
    });
    $.__views.search.add($.__views.searchButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.searchButton.addEventListener("click", function() {
        var keysearch = $.textField.getValue();
        var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keysearch + "&page=1&sort=newest&api-key=d730590d1855d4a228ee8184f59d8538:11:70307060";
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                var jsonObject = JSON.parse(this.responseText);
                var resultArray = [];
                for (var i = 0; i < jsonObject.response.docs.length; i++) resultArray.push({
                    snippet: jsonObject.response.docs[i].snippet,
                    headline: jsonObject.response.docs[i].headline.main
                });
                Ti.API.debug(this.responseText);
                Alloy.createController("list", {
                    article: resultArray
                }).getView().open();
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        xhr.open("GET", url);
        xhr.send();
    });
    $.search.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;