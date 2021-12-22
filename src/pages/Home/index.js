import React from 'react';
import './styles.scss';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import heroImg from '../../assets/images/Hero.png';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div id="home">
            <NavBar />

            <main class="main-home">
                <aside>
                    <div>
                        <div className="title">
                            <h1>Rodrigo Gouveia</h1>
                            <span role="img">👋🏽</span>
                        </div>

                        <p className="sub-title">Desenvolvedor Web & UI Design</p>

                        <Link to="/" className="cta-link">
                            <p>Clique <span>aqui</span> para começar.</p>
                        </Link>
                    </div>

                </aside>

                <div className="hero-image">
                    <img src={heroImg} alt="Hero" />
                </div>
            </main>

            <Footer />
        </div>
    );
}