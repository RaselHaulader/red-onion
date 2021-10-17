import React from 'react';
import delivery1Img from '../../images/abouts/adult-blur-blurred-background-687824.png'
import chefImg from '../../images/abouts/chef-cook-food-33614.png'
import delivery2Img from '../../images/abouts/architecture-building-city-2047397.png'
import About from '../About/About';
import './Abouts.css'

const Abouts = () => {
    return (
        <>
            <div className="container ps-4">
                <h3 className="mb-4">Why you choose us</h3>
                <p className="w-50 mb-5" style={{
                    fontWeight: "500",
                    fontSize: "14px"
                }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dignissimos consequatur amet cumque pariatur temporibus itaque nobis illo ratione deserunt?</p>
            </div>
            <div className="row container mx-auto">
                <About header={"Fast Delivery"} img={delivery1Img} info={'lorem ipsum vintage jai bonding is forever nothing happend anything'} icon={<i className="fas fa-bus-alt  about-icon"></i>} />

                <About header={"A Good Auto Responder"} img={chefImg} info={'lorem ipsum vintage jai bonding is forever nothing happend anything'} icon={<i class="far fa-bell about-icon"></i>} />

                <About header={"Home Delivery"} img={delivery2Img} info={'lorem ipsum vintage jai bonding is forever nothing happend anything'} icon={<i class="fas fa-shipping-fast about-icon"></i>} />
            </div>
        </>
    );
};

export default Abouts;