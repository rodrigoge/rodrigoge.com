import React from 'react';
import './styles.scss';

import NavBar from '../../components/NavBar';

export default function Home() {
    return (
        <div id="home">
            <NavBar />

            <main>
                Main text
            </main>
        </div>
    );
}