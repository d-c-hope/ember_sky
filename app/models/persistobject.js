import Ember from 'ember';


// Adds some useful features to Ember Object like the ability to easily copy
// an object or turn it into a basic objet or json
var PersistObject = Ember.Object.extend(Ember.Copyable, {
	
	id: -1,
	
	persistableProperties : [],
	
	state: "",
	
	toDict : function() { return this.getProperties(this.persistableProperties); },
	
	toJson : function() { return JSON.stringify(this.toDict()); },
	
	copy : function() {
		return this.constructor.create(this.toDict());
		},
		
	updateFromObject : function(dhappObj) {
			this.setProperties(dhappObj.toDict());
		},

});

export default PersistObject;
