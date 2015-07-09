import Ember from 'ember';
import Bill from 'sky-bill/models/bill';


export default Ember.Route.extend({
  setupController: function(controller, model) {
	  controller.set('model', model);
	  controller.setup();
  },
  model: function() {
	  
	  return Ember.$.getJSON('http://safe-plains-5453.herokuapp.com/bill.json').then(function(data) {
	      return Bill.create(data);
	  });	 

  }
});