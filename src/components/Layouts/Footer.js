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
            <div className='text-center my-4'>
                <h4><span>All Rights Reserved &copy; 2025</span> <span>5points Academy</span></h4>
            </div>
            <hr />

            {/* Developer Credit */}
            <div className="text-center my-2 text-secondary">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <span className="me-md-1 mb-1 mb-md-0">Developed & Maintained by</span>
                    <a
                        href="https://thoughthubhq.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center"
                    >
                        <img
                            src="/images/thoughthub-logo.png"
                            alt="ThoughtHub Logo"
                            className="me-1 rounded"
                            style={{ height: '24px' }}
                        />
                        <strong >ThoughtHub</strong>
                    </a>
                </div>
            </div>


        </div>
    );
};

export default Footer;