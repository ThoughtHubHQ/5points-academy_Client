import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row">
                    <div className='d-lg-flex justify-content-between'>
                        <div className='text-center mt-3'>
                            <h5 className='text-lg-start my-4'>We are </h5>
                            <p className="d-md-flex justify-content-center">
                                <Link to="/about">About Us</Link>

                                <Link to="/contact">Contact</Link>

                                <Link to="/policy">Privacy Policy</Link>
                            </p>
                        </div>

                        <div className='text-center mt-3'>
                            <h5 className='text-lg-end my-4'>Follow Us</h5>
                            <div className="d-md-flex justify-content-center">
                                <Link to="https://www.facebook.com/5pointsAcademy" target='_blank'>
                                    <i className="h3 fa-brands fa-square-facebook" />
                                </Link>
                                <Link to="https://www.youtube.com/@5pointsAcademy" target='_blank'>
                                    <i className="h3 fab fa-youtube"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center my-4'>
                <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center h4'>
                    <span>All Rights Reserved &copy; 2025</span>
                    <span className='ms-sm-2'>5points Academy</span>
                </div>
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