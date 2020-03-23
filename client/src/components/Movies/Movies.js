import React, { Component } from 'react'
import './Movies.scss'
import {Link} from 'react-router-dom'

export default class Movies extends Component {
    render() {
        const movies = this.props.moviesList;
        return (
            <div className="movies">
            <Link to={`/anime/${movies.id}`}>
                <div className="movies__image-container">
                    <img className="movies__image" src={movies.image_url} alt="movies" />
                    <h3 className="movies__title">{movies.title}</h3>
                </div>
            </Link>
        </div>
        )
        
    }
}