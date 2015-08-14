var ko = require("knockout");

var model = require("./model");

var child = require("./child");


ko.applyBindings(new model(), document.getElementById("element"));
ko.applyBindings(new child(new model()), document.getElementById("element2"));