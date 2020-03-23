const express = require('express');
const router = express.Router();
const romanceData = require('../data/animeRomance.json');

router.get('/', (req, res) => {
    res.json(romanceData)
});



module.exports = router;