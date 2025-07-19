import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row">
                    <div className='d-lg-flex justify-content-between'>
                        <div className='text-center mt-3'>
                            <h5 className='text-md-start my-4'>We are </h5>
                            <p className="d-md-flex justify-content-between">
                                <Link to="/about">About Us</Link>

                                <Link to="/contact">Contact</Link>

                                <Link to="/policy">Privacy Policy</Link>
                            </p>
                        </div>

                        <div className='text-center mt-3'>
                            <h5 className='text-md-end my-4'>Follow Us</h5>
                            <div className="d-md-flex justify-content-between">
                                <Link to="https://www.facebook.com/5pointsAcademy" target='_blank'>
                                    <i className="h3 fab fa-facebook-f"></i>
                                </Link>
                                <Link to="https://www.instagram.com/ashikurrb" target='_blank'>
                                    <i className="h3 fab fa-instagram"></i>
                                </Link> <Link to="https://www.youtube.com/@5pointsAcademy" target='_blank'>
                                    <i className="h3 fab fa-youtube"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-5'>
                <h4>All Rights Reserved &copy; 2025 5points Academy</h4>
            </div>
            <hr />
            <div className="text-center my-2 text-secondary">
                <span className="text-end">
                    Developed & Maintained by{' '}
                    <a
                        href="https://thoughthub.notion.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                    >
                        <img
                            src="/images/thoughthub-logo.png"
                            alt="ThoughtHub Logo"
                            style={{ height: '24px', marginRight: '5px', verticalAlign: 'middle' }}
                        />
                        <strong className='text-secondary'>ThoughtHub</strong>
                    </a>
                </span>
            </div>

        </div>
    );
};

export default Footer;