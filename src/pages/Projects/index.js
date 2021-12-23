import React from 'react';
import './styles.scss';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div id="projects">
            <NavBar />

            <main className="main-projects">
                <div className="main-content-projects">
                    <h1>Projetos e Hobbies.</h1>

                    <div className="main-header">
                        <div className="main-header-content">
                            <p>
                                Sou apaixonado por criar e construir projetos pessoais, seja para estudo, ou mesmo para iniciar algo que possa ajudar as pessoas.
                                Aqui estão listados alguns dos projetos que já construi e dediquei algumas horas livres para realizá-los.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="projects-content">
                    <h2>Todos os projetos</h2>

                    <ul>
                        <p className="project">
                            ●
                            <Link className="project-link" to={{ pathname: "https://github.com/rodrigoge/comanda-api" }} target="_blank">
                                Comanda:
                            </Link>
                            sistema de gerenciamento de comandas em estabelecimentos.
                        </p>

                        <p className="project">
                            ●
                            <Link className="project-link" to={{ pathname: "https://github.com/rodrigoge/noturnal" }} target="_blank">
                                Noturnal Theme:
                            </Link>
                            um tema criado para VSCode, inspirado no estilo Vaporwave.
                        </p>

                        <p className="project">
                            ●
                            <Link className="project-link" to={{ pathname: "https://github.com/rodrigoge/where-is-the-doctor" }} target="_blank">
                                Where is the Doctor:
                            </Link>
                            sistema web que conecta pacientes aos médicos.
                        </p>

                        <p className="project">
                            ●
                            <Link className="project-link" to={{ pathname: "https://github.com/rodrigoge/help-the-next" }} target="_blank">
                                Help the Next:
                            </Link>
                            aplicação que auxilia ONG's e Instituições a serem ajudadas.
                        </p>

                        <p className="project">
                            ●
                            <Link className="project-link" to={{ pathname: "https://github.com/rodrigoge/comunica-app" }} target="_blank">
                                Comunica:
                            </Link>
                            sistema web que facilita a crianças autistas de se comunicarem de uma maneira melhor.
                        </p>
                    </ul>
                </div>

            </main>

            <Footer />
        </div>
    );
}