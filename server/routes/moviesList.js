const express = require('express');
const router = express.Router();
const moviesData = require('../data/animeMovie.json');

router.get('/', (req, res) => {
    res.json(moviesData)
});



module.exports = router;