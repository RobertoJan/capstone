import React, { Component } from 'react'
import axios from 'axios';
import './Home.scss';
import ReactPlayer from 'react-player';
import './Anime.scss';

export default class Home extends Component {
    state = {
        animeData: {
            id: '',
            url: '',
            image_url: '',
            trailer_url: '',
            title: '',
            title_english: '',
            title_japanese: '',
            type: '',
            source: '',
            episodes: '',
            status: '',
            airing: '',
            duration: '',
            rating: '',
            score: '',
            scored_by: '',
            rank: '',
            popularity: '',
            members: '',
            favorites: '',
            synopsis: '',
            background: '',
            premiered: '',
            genres: '',
            reviews: [],
            opening_themes: [],
            ending_themes: []
        }
    
    };

    componentDidMount() { 
        axios.get(`http://localhost:8080/anime/${this.props.match.params.id}`)
            .then(res => {
            const animeData = res.data;
            this.setState ({animeData});
            })
            .catch(() => {console.error('error');
            });
            window.scrollTo(0, 0)
    }
    
    render() {
        const anime = this.state.animeData;
        return (
        <div className="anime">
            <div>
                <h2 className="anime__title">{anime.title}</h2>
                <div className="anime__infoContainer">
                    <div className="anime__imageContainer">
                        <img className="anime__image" src={anime.image_url} alt="featured anime" />
                    </div>
                    <div className="anime__miscInfoContainer">
                        <h3 className="anime__detail">English title: {anime.title_english}</h3>
                        <h3 className="anime__detail">Japanese title: {anime.title_japanese}</h3>
                        <h3 className="anime__detail">Episodes: {anime.episodes}</h3>
                        <h3 className="anime__detail">Rating: {anime.rating}</h3>
                        <h3 className="anime__detail">Score: {anime.score}</h3>
                        <h3 className="anime__detail">Rank: {anime.rank}</h3>
                        <h3 className="anime__detail">Aired: {anime.aired}</h3>
                        <h3 className="anime__detail">Favorites: {anime.favorites}</h3>
                        <h3 className="anime__detail">Genre: {anime.genres}</h3>
                    </div>
                </div>
                <div className="anime__infoDescription">
                    <p className="anime__description"><span>Description: </span>{anime.synopsis}</p>
                    <p className="anime__synopsis"><span>Synopsis: </span>{anime.background}</p>
                </div>
                <div className="anime__preview">
                    <ReactPlayer url={anime.trailer_url} controls={true} />
                </div>
                
            </div>
        </div>
        )
    }
}