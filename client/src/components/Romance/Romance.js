import React, { Component } from 'react'
import './Romance.scss'
import {Link} from 'react-router-dom'

export default class Featured extends Component {
    render() {
        const romance = this.props.romanceList
        return (
            <div className="romance">
            <Link to={`/anime/${romance.mal_id}`}>
                <div className="romance__image-container">
                    <img className="romance__image" src={romance.image_url} alt="romance anime" />
                    <h3 className="romance__title">{romance.title}</h3>
                </div>
            </Link>
        </div>
        )
        
    }
}