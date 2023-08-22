/**
 * Install a package using npm and use it in your application. For example, install the moment package and
 * use it to format a date in your application.
 */

// requiring moment module after 'npm install moment'
const moment = require("moment");

// defining a variable with formatted date.
const formattedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(formattedDate);
