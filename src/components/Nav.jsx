import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export const Nav = () => {
    const [clicked, setClicked] = useState();
    const handleClick = () => {
        clicked ? setClicked('') : setClicked('header mobile');
    };

    const [color, setColor] = useState();

    return (
        <header className={clicked || "header"}{...color || "header-color"}>
            <div className="main_logo">
                <img src='./header-logo.png' alt="bite.labs" className="logo" />
                <h2 className="logo_title">Bite. Labs</h2>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">

                <li ><Link className='navbar-link' to="/">Home</Link></li>
                    <li><a className="navbar-link" href="/">Reviews</a></li>
                    <li><a className="navbar-link" href="/">Blog</a></li>
                    <li><a className="navbar-link" href="/">Contact</a></li>
                </ul>
            </nav>

            <div className="mobile-navbar-btn" onClick={handleClick}>
                <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
                <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
            </div>
        </header>
    )
}
