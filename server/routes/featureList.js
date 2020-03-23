const express = require('express');
const router = express.Router();
const featureData = require('../data/animeFeature.json');

router.get('/', (req, res) => {
    res.json(featureData)
});



module.exports = router;