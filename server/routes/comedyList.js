const express = require('express');
const router = express.Router();
const comedyData = require('../data/animeComedy.json');

router.get('/', (req, res) => {
    res.json(comedyData)
});



module.exports = router;