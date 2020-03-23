import React from 'react';
import Nav from './components/Nav/Nav'
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Anime from './pages/Anime'
import MovieQuiz from './pages/MovieQuiz'
import {Helmet} from 'react-helmet'


function App() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>AniLife</title>
    </Helmet>
    <BrowserRouter>
    <Nav />
    <Switch>
    <Route exact path='/'  component={Home} />
    <Route path="/quiz/" component={MovieQuiz}/>
    <Route path="/anime/:id" component={Anime}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
