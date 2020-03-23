const express = require('express');
const router = express.Router();
const movieQuestions = require('../data/movieQuestions.json');

router.get('/', (req, res) => {
    res.json(movieQuestions)
});



module.exports = router;