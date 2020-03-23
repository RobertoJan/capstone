const express = require('express');
const router = express.Router();

const data = require('../data/animeList.json');


router.get('/:id', (req, res) => {
    let animeInfo = req.params.id
    return res.json(data.find(data => 
        data.id == animeInfo));
});


module.exports = router;