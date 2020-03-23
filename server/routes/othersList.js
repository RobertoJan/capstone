const express = require('express');
const router = express.Router();
const othersData = require('../data/animeOthers.json');

router.get('/', (req, res) => {
    res.json(othersData)
});



module.exports = router;