import React, { useState } from 'react';

import './styles.scss';

import logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isClicked, setIsClicked] = useState(false);

    async function handleToggleMenu() {
        if (isClicked) {
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }
    }

    return (
        <header>
            <nav className={`${isClicked ? "on" : ""}`}>
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>

                <div className="menu">
                    <div className="menu-bars" onClick={handleToggleMenu}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <ul>
                        <Link className="menu-link" to="/sobre">
                            sobre
                        </Link>

                        <Link className="menu-link" to="/artigos">
                            artigos
                        </Link>

                        <Link className="menu-link" to="/projetos">
                            projetos
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>

    );
}