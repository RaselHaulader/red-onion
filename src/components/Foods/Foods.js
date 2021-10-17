import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([])
    const [data, setData] = useState('./breakfast.json')
    const [activeCheck, setActive] = useState('breakFast')

    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [data])

    const handleBreakFast = () => {
        setActive('breakFast');
        setData('./breakfast.json')
    }
    const handleLunch = () => {
        setActive('lunch');
        setData('./lunch.json')
    }
    const handleDinner = () => {
        setActive('dinner');
        setData('./dinner.json')
    }

    const activeBtn = {
        color: "red",
        borderBottom: "4px solid red"
    }
    return (
        <div>
            <div className="text-center mt-4">
                <button style={activeCheck === 'breakFast' ? activeBtn : {}} onClick={handleBreakFast} className="food-btn">BreakFast</button>
                <button style={activeCheck === 'lunch' ? activeBtn : {}} onClick={handleLunch} className="food-btn">Lunch</button>
                <button style={activeCheck === 'dinner' ? activeBtn : {}} onClick={handleDinner} className="food-btn">Dinner</button>
            </div>
            <div className="row foods mx-auto p-5 pt-3">
                {foods.map(food => <Food food={food}></Food>)}
            </div>
            <div className="text-center my-5">
                <button className="btn checkOut-btn">Check Out Your food</button>
            </div>
        </div>
    );
};

export default Foods;