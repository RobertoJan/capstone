import React, { Component } from 'react'
import './SliceOfLife.scss'
import {Link} from 'react-router-dom'

export default class Featured extends Component {
    render() {
        const sliceOfLife = this.props.sliceOfLifeList
        return (
            <div className="sliceOfLife">
            <Link to={`/anime/${sliceOfLife.mal_id}`}>
                <div className="sliceOfLife__image-container">
                    <img className="sliceOfLife__image" src={sliceOfLife.image_url} alt="slice of Life anime" />
                    <h3 className="sliceOfLife__title">{sliceOfLife.title}</h3>
                </div>
            </Link>
        </div>
        ) 
    }
}