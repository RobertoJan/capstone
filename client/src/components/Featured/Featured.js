import React, { Component } from 'react'
import './Featured.scss'
import {Link} from 'react-router-dom'

export default class Featured extends Component {
    render() {
        const featured = this.props.featuredList
        return (
            <div className="featured">
            <Link to={`/anime/${featured.mal_id}`}>
                <div className="featured__image-container">
                    <img className="featured__image" src={featured.image_url} alt="featured anime" />
                    <h3 className="featured__title">{featured.title}</h3>
                </div>
            </Link>
        </div>
        )
        
    }
}
