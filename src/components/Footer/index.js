import React from 'react';

import './styles.scss';

import { Link } from 'react-router-dom';

import { MdTag } from 'react-icons/md';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <Link to={{ pathname: "https://github.com/rodrigoge/rodrigoge.com/" }} target="_blank" className="footer-link">
                <MdTag className="footer-icon" />
                <p>code</p>
            </Link>

            <Link to={{ pathname: "https://github.com/rodrigoge" }} target="_blank" className="footer-link">
                <AiFillGithub className="footer-icon" />
                <p>github</p>
            </Link>

            <Link to={{ pathname: "https://www.linkedin.com/in/rodriggo/" }} target="_blank" className="footer-link">
                <FaLinkedinIn className="footer-icon" />
                <p>linkedin</p>
            </Link>

            <Link to={{ pathname: "https://www.instagram.com/rodrigoge_/" }} target="_blank" className="footer-link">
                <AiFillInstagram className="footer-icon" />
                <p>instagram</p>
            </Link>
        </footer>
    );
}