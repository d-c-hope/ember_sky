# Sky-bill

# Intro

This frontend application has been built with EmberJs. 

Most of the code is boiler plate produced by the EmberCli tool. The important files are in app:

* controllers/index.js - contains the model and handles clicks on the index.hbs page
* routes/index.js - setup the model for the /(root) route by fetching the json
* styles/*.scss
* templates/*.hbs - the index.hbs file has the page html and variable placeholders
* models/bill.js - the model - wraps the json with some useful properties

Tests can be found in the tests directory and there are 2 test files:

* integration/billing-page-test.js - Checks that the list of calls is displayed when the button is pressed
* unit/bill-test.js - checks that the properties on the model work

## Running

You can run the code by copying the files in the dist directory into the root directory of your web server
Note that for the current build it is expected that the app lives at root, like http://domain.com/

To run locally you can use embercli - see below on where to get this. 

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).


## Building and testing

You will need ember cli to build or test the code. See the instructions
at:

* http://www.ember-cli.com

for how to get this.

You can build with:

* `ember build` (development)
* `ember build --environment production` (production)


### Running Tests

* `ember test`
* `ember test --server`

