import React from 'react';
import logo from "../../../images/logo3.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark footer-text p-5 mt-5">
            <div className="row container mx-auto">
                <div className="col-6">
                    <img className="footer-logo" src={logo} alt="" />
                </div>
                <div className="col-3">
                    <p>About Online Food</p>
                    <p>Read Our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="col-3">
                    <p>Privacy and policy</p>
                    <p>Contact fo info</p>
                    <p>Restaurant Near you</p>
                    <p>Join With Us</p>
                </div>

            </div>
            <div className='d-flex justify-content-between p-5 mt-4 mb-2'><span>Copyright by Russel 2021</span><span>Privacy Policy. Terms of use Pricing</span></div>
        </div>
    );
};

export default Footer;