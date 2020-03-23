const express = require('express');
const cors = require('cors');

const app = express();
const animeList = require('./routes/animeList');
const shounenList = require('./routes/shounenList');
const romanceList = require('./routes/romanceList');
const comedyList = require('./routes/comedyList');
const sliceOfLifeList = require('./routes/sliceOfLifeList');
const othersList = require('./routes/othersList');
const moviesList = require('./routes/moviesList');
const featureList = require('./routes/FeatureList');
const animeInfo = require ('./routes/anime');
const movieQuiz = require ('./routes/movieQuiz');

app.use(express.json());
app.use(cors());

app.use('/', animeList);
app.use('/shounen', shounenList);
app.use('/romance', romanceList);
app.use('/comedy', comedyList);
app.use('/sliceOfLife', sliceOfLifeList);
app.use('/others', othersList);
app.use('/movies', moviesList);
app.use('/featured', featureList);
app.use('/anime', animeInfo);
app.use('/questions', movieQuiz)



app.listen(8080, () => console.log('Listening on Port 8080'));