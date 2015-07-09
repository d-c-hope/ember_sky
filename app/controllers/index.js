import Ember from 'ember';



export default Ember.Controller.extend({
  
  displayAllCalls : false,
  
  callsButtonText : function() {
	  if (this.get('displayAllCalls')) {return "Hide Calls";}
	  else {return "Show Calls";}
  }.property('displayAllCalls'),

  setup: function() {
  },
  
  actions: {
    toggleAllCalls : function() {
    	if (this.get('displayAllCalls')) {this.set('displayAllCalls', false);}
    	else {this.set('displayAllCalls', true);}
    }
  },
  
  
});