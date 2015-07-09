import Ember from 'ember';
import Account from 'sky-bill/models/account';


export default Ember.Controller.extend({
  
  search: 'xcxzcxzx',

  setup: function() {
	  this.acc = Account.create({firstName:"david"});
  },
  
  actions: {
    
  },
  
//  duration: function() {
//	 return this.get('model');
//  }.property('model'),
  
});