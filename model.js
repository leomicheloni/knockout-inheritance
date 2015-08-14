var ko = require("knockout");

function  model(){

	this.name = ko.observable("");	
	this.lastName = ko.observable("");
	
	this.fullName = ko.computed(function(){
		return this.name() + ", " + this.lastName();
	}, this);	
};

module.exports = model;