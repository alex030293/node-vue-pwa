const express = require('express');
const router  = express.Router();
const path    = require('path');

// GET app frontend
router.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../public/dist/index.html'))
});

module.exports = router;