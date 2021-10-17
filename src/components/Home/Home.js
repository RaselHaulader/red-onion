import React from 'react';
import Abouts from '../Abouts/Abouts';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import FoodDetails from '../FoodDetails/FoodDetails';
import Foods from '../Foods/Foods';
import Login from '../Login/Login';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Banner></Banner>
            <Foods></Foods>
            <Abouts></Abouts>
            <Footer></Footer>
        </div>
    );
};

export default Home;