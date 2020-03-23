import React from 'react'
import Logo from '../Logo/Logo'
import './Nav.scss';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav">
            <Logo />
            <div className="nav__movie">
                <Link className="nav__link" to='/quiz/' >
                    <button className="nav__button">
                    Pick a Movie
                    </button>
                </Link>
            </div>
            
        </div>
    )
}
