import React from 'react';
import './About.css'

const About = ({ header, img, info, icon }) => {

    return (
        <div className="col-4">
            <img className="w-100" src={img} alt="" />
            <div className="d-flex p-4">
                <div>
                    {icon}
                </div>
                <div className="about-details">
                    <h6>{header} header</h6>
                    <p>{info} info</p>
                    <a href="/">See more  <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
    );
};

export default About;