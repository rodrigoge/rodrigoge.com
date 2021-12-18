import React from 'react';
import './styles.scss';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div id="home">
            <NavBar />

            <main>
                Main text
            </main>

            <Footer />
        </div>
    );
}