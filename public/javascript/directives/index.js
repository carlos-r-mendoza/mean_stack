'use strict';
var app = require('../app.js');
app.directive('newCustomerForm', require('./new-customer-form/new-customer-form.js'));
app.directive('updateCustomerForm', require('./update-customer-form/update-customer-form.js'));