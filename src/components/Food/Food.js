import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = ({ food }) => {
    const { name, price, info, img ,id} = food
    return (

       
            <div className="col-12 col-md-4 p-4 food-item text-center mx-auto ">
                 <Link to={'/details/'+id}>
                <div className="food-container  py-4">
                    <img className="w-50" src={img} alt="" />
                    <div className="food-details">
                        <h5>{name}</h5>
                        <small>{info}</small>
                        <h4>${price}</h4>
                    </div>
                </div>
                </Link>
            </div>
       
    );
};

export default Food;