const express = require('express');
const router = express.Router();
const animeData = require('../data/animeList.json');


router.get('/', (req, res) => {
    res.json(animeData)
});





module.exports = router;