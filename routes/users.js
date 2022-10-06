/* File name: user.js
 * Student name: Naveen Kanmani Thirunavukkarasu
 * Student ID: 301247248
 * Date: Oct 6, 2022 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
