const express = require('express');
const router = express.Router();
const shounenData = require('../data/animeShounen.json');

router.get('/', (req, res) => {
    res.json(shounenData)
});



module.exports = router;