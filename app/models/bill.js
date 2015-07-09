import PersistObject from 'sky-bill/models/persistobject';


// Represents a user account
var Bill = PersistObject.extend({
	
	persistableProperties : ['statement', 'total', 'package', 'callCharges','skyStore'],
	
	statement: null,
	total : -1, 
	package : {}, 
	callCharges : {},
	skyStore : {},
	
	hasTv : function() {
		var subscriptions = this.get('package.subscriptions');
		if (subscriptions.findBy("type", "tv") !== undefined) {return true;}
		else {return false;}
	}.property("package.subscriptions.@each.type"),
	
	hasTalk : function() {
		var subscriptions = this.get('package.subscriptions');
		if (subscriptions.findBy("type", "talk") !== undefined) {return true;}
		else {return false;}
	}.property("package.subscriptions.@each.type"),
	
	hasBroadband : function() {
		var subscriptions = this.get('package.subscriptions');
		if (subscriptions.findBy("type", "broadband") !== undefined) {return true;}
		else {return false;}
	}.property("package.subscriptions.@each.type"),
	
});

export default Bill;
