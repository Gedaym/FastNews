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
    this.__controllerPath = "list";
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
    $.__views.list = Ti.UI.createWindow({
        id: "list"
    });
    $.__views.list && $.addTopLevelView($.__views.list);
    $.__views.scroll = Ti.UI.createScrollView({
        width: Ti.Platform.DisplayCaps.platformWidth,
        layout: "vertical",
        id: "scroll"
    });
    $.__views.list.add($.__views.scroll);
    $.__views.headline0 = Ti.UI.createLabel({
        top: 5,
        color: "#FF0000",
        id: "headline0"
    });
    $.__views.scroll.add($.__views.headline0);
    $.__views.snippet0 = Ti.UI.createLabel({
        top: 20,
        id: "snippet0"
    });
    $.__views.scroll.add($.__views.snippet0);
    $.__views.headline1 = Ti.UI.createLabel({
        top: 5,
        color: "#FF0000",
        id: "headline1"
    });
    $.__views.scroll.add($.__views.headline1);
    $.__views.snippet1 = Ti.UI.createLabel({
        top: 20,
        id: "snippet1"
    });
    $.__views.scroll.add($.__views.snippet1);
    $.__views.headline2 = Ti.UI.createLabel({
        top: 5,
        color: "#FF0000",
        id: "headline2"
    });
    $.__views.scroll.add($.__views.headline2);
    $.__views.snippet2 = Ti.UI.createLabel({
        top: 20,
        id: "snippet2"
    });
    $.__views.scroll.add($.__views.snippet2);
    $.__views.headline3 = Ti.UI.createLabel({
        top: 5,
        color: "#FF0000",
        id: "headline3"
    });
    $.__views.scroll.add($.__views.headline3);
    $.__views.snippet3 = Ti.UI.createLabel({
        top: 20,
        id: "snippet3"
    });
    $.__views.scroll.add($.__views.snippet3);
    $.__views.headline4 = Ti.UI.createLabel({
        top: 5,
        color: "#FF0000",
        id: "headline4"
    });
    $.__views.scroll.add($.__views.headline4);
    $.__views.snippet4 = Ti.UI.createLabel({
        top: 20,
        id: "snippet4"
    });
    $.__views.scroll.add($.__views.snippet4);
    $.__views.headline5 = Ti.UI.createLabel({
        top: 5,
        color: "#FF0000",
        id: "headline5"
    });
    $.__views.scroll.add($.__views.headline5);
    $.__views.snippet5 = Ti.UI.createLabel({
        top: 20,
        id: "snippet5"
    });
    $.__views.scroll.add($.__views.snippet5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.headline0.text = args.article[0].headline;
    $.snippet0.text = args.article[0].snippet;
    $.headline1.text = args.article[1].headline;
    $.snippet1.text = args.article[1].snippet;
    $.headline2.text = args.article[2].headline;
    $.snippet2.text = args.article[2].snippet;
    $.headline3.text = args.article[3].headline;
    $.snippet3.text = args.article[3].snippet;
    $.headline4.text = args.article[4].headline;
    $.snippet4.text = args.article[4].snippet;
    $.headline5.text = args.article[5].headline;
    $.snippet5.text = args.article[5].snippet;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;