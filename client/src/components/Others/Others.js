import React, { Component } from 'react'
import './Others.scss'
import {Link} from 'react-router-dom'

export default class Others extends Component {
    render() {
        const others = this.props.othersList
        return (
            <div className="others">
            <Link to={`/anime/${others.mal_id}`}>
                <div className="others__image-container">
                    <img className="others__image" src={others.image_url} alt="others anime" />
                    <h3 className="others__title">{others.title}</h3>
                </div>

            </Link>
        </div>
        )
        
    }
}