import React, { Component } from 'react'
import './Shounen.scss'
import {Link} from 'react-router-dom'

export default class Featured extends Component {
    render() {
        const shounen = this.props.shounenList
        return (
            <div className="shounen">
            <Link to={`/anime/${shounen.mal_id}`}>
                <div className="shounen__image-container">
                    <img className="shounen__image" src={shounen.image_url} alt="shounen anime" />
                    <h3 className="shounen__title">{shounen.title}</h3>
                </div>
            </Link>
        </div>
        )
        
    }
}