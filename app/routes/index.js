import Ember from 'ember';

export default Ember.Route.extend({
//  setupController: function(controller) {
//    // Set the IndexController's `title`
//    controller.setup();
//  },
  model: function() {
	  console.log("in modelsssssssss");
	  return Ember.$.getJSON('http://safe-plains-5453.herokuapp.com/bill.json');
  }
});