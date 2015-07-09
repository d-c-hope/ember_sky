import Ember from 'ember';


//Objects of this type are used in the persistance.js file. They should have
//at least one property: '_id' which gives each object of a given
//type a unique identifier. Any properties to be persisted to the server like '_id'
//should have their name included in the persistableProperties array too so that functions
//like toJson know which properties to put in the json
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
