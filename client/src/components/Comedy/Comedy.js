import React, { Component } from 'react'
import './Comedy.scss'
import {Link} from 'react-router-dom'

export default class Featured extends Component {
    render() {
        const comedy = this.props.comedyList
        return (
            <div className="comedy">
            <Link to={`/anime/${comedy.mal_id}`}>
                <div className="comedy__image-container">
                    <img className="comedy__image" src={comedy.image_url} alt="comedy anime" />
                    <h3 className="comedy__title">{comedy.title}</h3>
                </div>
            </Link>
        </div>
        )   
    }
}
