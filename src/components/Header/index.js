import React from 'react';

import './styles.scss';

import logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div>
            <header className="header">
                <nav className="header__content">
                    <Link to="/">
                        <img className="header__content__img" src={logo} alt="Logo" />
                    </Link>

                    <div className="header__content__navbar">
                        <Link className="header__content__navbar__item" to="/">
                            sobre
                        </Link>

                        <Link className="header__content__navbar__item" to="/">
                            artigos
                        </Link>

                        <Link className="header__content__navbar__item" to="/">
                            projetos
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}