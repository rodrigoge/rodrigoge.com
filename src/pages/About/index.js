import React from 'react';
import './styles.scss';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import heroAboutImg from '../../assets/images/Hero-About.png';

import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div id="about">
            <NavBar />

            <main className="main-about">
                <div className="main-content">
                    <h1>Um pouco mais sobre mim.</h1>

                    <div className="main-header">
                        <img src={heroAboutImg} alt="Foto Rodrigo Gouveia" />

                        <div className="main-header-content">
                            <p>Olá, eu sou o Rodrigo Gouveia. 😄</p>

                            <p>Comecei a me interessar pela área de desenvolvimento por volta do ano de 2015.</p>

                            <p>
                                Atualmente trabalho como Desenvolvedor Web na <Link className="link-main-about" to={{ pathname: "https://b2ml.com.br/" }} target="_blank">B2ML Sistemas</Link>.
                                Nasci em São Bento do Sapucaí, em São Paulo, e moro em Paraisópolis, no Sul de Minas Gerais.
                            </p>

                            <p>Amo <i>front-end, darkmode e café.</i></p>
                        </div>
                    </div>
                </div>

                <div className="habilities">
                    <h2>Habilidades</h2>

                    <p>Spring Boot, JSF (Java ServerFaces), Primefaces, Hibernate, ReactJS, Node.js, Sass, MySQL, PostgreSQL, MongoDB, Figma.</p>
                </div>

                <div className="career">
                    <h2>Carreira</h2>

                    <div className="job">
                        <h3 className="office">
                            Desenvolvedor Web Java
                        </h3>

                        <p className="company-city">
                            <Link className="career-link" to={{ pathname: "https://b2ml.com.br/" }} target="_blank">
                                B2ML Sistemas
                            </Link>
                            • Itajubá/MG
                        </p>

                        <p className="time">
                            Jul 2020 - atualmente
                        </p>
                    </div>

                    <div className="job">
                        <h3 className="office">
                            Professor de Informática Básica
                        </h3>

                        <p className="company-city">
                            <Link className="career-link" to={{ pathname: "https://serprocursos.com.br/loja_virtual/index.php" }} target="_blank">
                                SERPRO Cursos
                            </Link>
                            • Paraisópolis/MG
                        </p>

                        <p className="time">
                            Fev 2019 - Jul 2020
                        </p>
                    </div>

                    <div className="job">
                        <h3 className="office">
                            Suporte Técnico
                        </h3>

                        <p className="company-city">
                            <Link className="career-link" to={{ pathname: "https://www.rgsites.com.br/" }} target="_blank">
                                Municípios Web
                            </Link>
                            • Paraisópolis/MG
                        </p>

                        <p className="time">
                            Fev 2019 - Mai 2019
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>


    );
}
