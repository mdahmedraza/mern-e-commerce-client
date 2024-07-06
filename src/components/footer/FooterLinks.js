import React from 'react';
import './FooterLinks.scss';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const logo = (
    <div className='header'>
        <div className='logo'>
            <Link to='/'>
                <h2>Shop<span>Ito</span>.</h2>
            </Link>
        </div>
    </div>
)

const FooterLinks = () => {
    return(
        <React.Fragment>
            <section className='contact-section'>
                <div className='container contact'>
                    <div className='contact-icon'>
                        <FaFacebook className='i' />
                        <FaInstagram className='i' />
                        <FaTwitter className='i' />
                        <FaYoutube className='i' />
                    </div>
                    <h2>Let's Talk?</h2>
                    <a href="#home" className='btn btn-dark'>Make an enquery!</a>
                </div>
            </section>
            <section className='footer-section'>
                <div className='container footer'>
                    <div className='footer-logo'>
                        {logo}
                    </div>
                    <div className='footer-menu'>
                        <p className='link-heading'>Features</p>
                        <ul className='nav-ul footer-links'>
                            <li>
                                <a href='#home'>Link Shortening</a>
                            </li>
                            <li>
                                <a href='#home'>Branded Links</a>
                            </li>
                            <li>
                                <a href='#home'>Analytics</a>
                            </li>
                            <li>
                                <a href='#home'>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p className='link-heading'>Resources</p>
                        <ul className='nav-ul footer-links'>
                            <li>
                                <a href='#home'>Link Shortining</a>
                            </li>
                            <li>
                                <a href='#home'></a>
                            </li>
                            <li>
                                <a href='#home'>Analytics</a>
                            </li>
                            <li>
                                <a href='#home'>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p className='link-heading'>Company</p>
                        <ul className='nav-ul footer-links'>
                            <li>
                                <a href='#home'>Link Shortening</a>
                            </li>
                            <li>
                                <a href='#home'>Branded Links</a>
                            </li>
                            <li>
                                <a href='#home'>Analytics</a>
                            </li>
                            <li>
                                <a href='#home'>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p className='link-heading'>Partners</p>
                        <ul className='nav-ul footer-links'>
                            <li>
                                <a href='#home'>Link Shortening</a>
                            </li>
                            <li>
                                <a href='#home'>Branded Links</a>
                            </li>
                            <li>
                                <a href='#home'>Analytics</a>
                            </li>
                            <li>
                                <a href='#home'>Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FooterLinks;