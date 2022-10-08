/* File name: index.js
 * Student name: Naveen Kanmani Thirunavukkarasu
 * Student ID: 301247248
 * Date: Oct 6, 2022 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { user, title: 'Home'});
});

/* initializing user */
const user = {
  firstName: 'Naveen',
  lastName: 'Kanmani Thirunavukkarasu',
  admin: true
}

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { user, title: 'Home'});
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('product', { title: 'Products'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services'});
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
