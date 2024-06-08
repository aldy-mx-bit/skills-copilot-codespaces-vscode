// Create new server
var express = require('express');
var express = require('express');
var router = express.Router();

// Get comments page
router.get('/', function(req, res) {
    res.render('comments');
});

// Export module
module.exports = router;