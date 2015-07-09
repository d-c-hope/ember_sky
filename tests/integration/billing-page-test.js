import Ember from "ember";
import { module, test } from 'qunit';
import sinon from 'sinon';

import startApp from '../helpers/start-app';
var App;
  
var bill = {
	  "statement": {
	    "generated": "2015-01-11",
	    "due": "2015-01-25",
	    "period": {
	      "from": "2015-01-26",
	      "to": "2015-02-25"
	    }
	  },
	  "total": 136.03,
	  "package": {
	    "subscriptions": [
	      { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
	      { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
	      { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
	    ],
	    "total": 71.40
	  },
	  "callCharges": {
	    "calls": [
	      { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
	      { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
	      
	    ],
	    "total": 59.64
	  },
	  "skyStore": {
	    "rentals": [
	      { "title": "50 Shades of Grey", "cost": 4.99 }
	    ],
	    "buyAndKeep": [
	      { "title": "That's what she said", "cost": 9.99 },
	      { "title": "Broke back mountain", "cost": 9.99 }
	    ],
	    "total": 24.97
	  }
};



module('Skybill Integration test', {
   
	beforeEach: function() {
		this.server = sinon.fakeServer.create();
		App = startApp();
   },
   
   afterEach: function() {
	 this.server.restore();
     Ember.run(App, App.destroy);
   }
});
 
test("Page contents", function(assert) {
   assert.expect(3);
   
   var that = this;
   this.server.respondWith(JSON.stringify(bill));
   this.server.autoRespond = true;
   this.server.autoRespondAfter = 100;
   
   visit('/').then(function() {
     assert.equal(find('tr.phonecall').length, 0, "Page contains 0 phonecalls");
     assert.equal(find('.summary > div').length, 3, "Page contains 3 items in summary header");
   });
   click('span.genericButton');
   andThen(function() {
	   assert.equal(find('tr.phonecall').length, 2, "Page contains 2 phonecalls");
	  });
});



