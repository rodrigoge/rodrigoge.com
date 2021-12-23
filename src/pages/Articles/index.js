import React from 'react';
import './styles.scss';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';

export default function Articles() {
    return (
        <div id="articles">
            <NavBar />

            <main className="main-articles">
                <div className="main-content-articles">
                    <h1>Escrita, Histórias e Textos.</h1>

                    <div className="main-header">
                        <div className="main-header-content">
                            <p>
                                Um dos hobbies que mais gosto de fazer é praticar a escrita.
                                E aqui estão alguns dos artigos que já escrevi sobre algumas coisas relacionadas a área de desenvolvimento e afins.
                                Espero que gostem ✌️
                            </p>
                        </div>
                    </div>
                </div>

                <div className="articles-content">
                    <h2>Artigos</h2>

                    <div className="item">
                        <p className="article">
                            <Link className="article-link" to={{ pathname: "https://medium.com/@rodrigoge/a-import%C3%A2ncia-das-meta-tags-e7e8c0281c4f" }} target="_blank">
                                A importância das meta tags
                            </Link>
                            • Jun 2020
                        </p>
                    </div>

                    <div className="item">
                        <p className="article">
                            <Link className="article-link" to={{ pathname: "https://medium.com/@rodrigoge/como-centralizar-elementos-em-tela-com-html-e-css-7506cab8e6ad" }} target="_blank">
                                Como centralizar elementos em tela com HTML e CSS
                            </Link>
                            • Jun 2020
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}