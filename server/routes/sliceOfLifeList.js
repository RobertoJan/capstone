const express = require('express');
const router = express.Router();
const sliceOfLifeData = require('../data/animeSliceOfLife.json');

router.get('/', (req, res) => {
    res.json(sliceOfLifeData)
});



module.exports = router;