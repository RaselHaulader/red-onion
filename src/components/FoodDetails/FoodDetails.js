import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './FoodDetails.css';

const FoodDetails = () => {
    const [foods, setFoods] = useState([])
    const [food, setFood] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/RaselHaulader/json/main/allFoods.json')
        .then(res=> res.json())
        .then(data=>setFoods(data))
    },[])
    useEffect(()=>{
        const filtered = foods.find(food=> food.id===parseInt(id))
        setFood(filtered)
        window.scrollTo(0, 0);
    },[id,foods])
    console.log(food)
    return (
        <>
          <Header></Header>
        <div className='d-flex m-5 p-5'>
            <div className="w-50 pe-5 foodDetails d-flex pt-4 flex-column">
                <div>
                    <h1>{food?.name}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet tempore id rem aspernatur iste vitae similique. Odit odio veniam optio quam, cumque vero voluptates ea sapiente voluptatum illo fugit quod quidem eligendi enim mollitia. Veniam possimus ea temporibus sed fuga.</p>
                    <div className="d-flex count-btn-sec">
                        <h2 className="me-3">${food?.price}</h2>
                        <div className="border border-1 px-2 rounded-pill "><i className="fas fa-minus"></i> 1 <i className="fas text-danger fa-plus"></i> </div>
                    </div>
                    <button className="color-btn rounded-pill text-white px-3 border-0 my-3"> <i className="fas fa-cart-plus text-white"></i> Add </button>
                </div>
                <div className="d-flex align-items-center mt-5">
                    <div>
                        <img className="w-75" src="https://i.ibb.co/nfYJfDp/dinner2.png" alt="" />
                    </div>
                    <div>
                        <img className="w-75" src="https://i.ibb.co/wzVwrY9/dinner3.png" alt="" />
                    </div>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
            <div className="w-50 p-4">
                <img className="w-100" src={food?.img} alt="" />
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default FoodDetails;