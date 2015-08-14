var ko = require("knockout");

function child(base){
	if(base) ko.utils.extend(this, base);
	this.age = ko.observable();
	this.fullName = ko.computed(function(){
		return base.fullName() + ":" + this.age();
	}, this);
}

module.exports = child;