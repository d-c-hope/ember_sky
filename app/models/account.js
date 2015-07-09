import PersistObject from 'sky-bill/models/persistobject';


// Represents a user account
var Account = PersistObject.extend({
	
	persistableProperties : ['id', 'email', 'firstName', 'lastName','business', 'adminLevel'],
	
	id 			: -1,
	email 		: "",
	firstName 	: "",
	lastName 	: "",
	business	: null,
	adminLevel 	: 0,
	
});

export default Account;
