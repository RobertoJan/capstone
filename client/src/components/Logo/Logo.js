import React from 'react'
import logoImage from '../../assets/Logo/AniLife.png'
import './Logo.scss';
import {Link} from 'react-router-dom';

export default function Logo() {
    return (
        <Link className="logo" to='/' >
            <img className="logo__img" src={logoImage} alt="logo" />
        </Link>
    )
}
