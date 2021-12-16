import React, { useEffect } from 'react';

import './styles.scss';

import logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    useEffect(() => {
        let show = true;

        const menu = document.getElementsByClassName("menu");
        const toggle = document.getElementsByClassName("toggle");

        this.toggle.addEventListener("click", () => {
            document.body.style.overflow = show ? "hidden" : "initial";
            menu.classList.toggle("on", show);

            show = !show;
        })

    }, []);

    return (
        <div>
            <header className="header">
                <div className="content">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>

                    <div className="menu">
                        <div className="toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>

                        <nav className="navbar">
                            <Link className="item" to="/">
                                sobre
                            </Link>

                            <Link className="item" to="/">
                                artigos
                            </Link>

                            <Link className="item" to="/">
                                projetos
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}