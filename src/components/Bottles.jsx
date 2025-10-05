import React, { use, useState } from 'react';
import Bottle from './Bottle';
import './bottle.css'

const Bottles = ({ bottobottlesPromise }) => {
    const bottles = use(bottobottlesPromise)

    const [cart, setCart] = useState([]);
    const handleAddToCart = (bottle) => {
        const newCart = [ ...cart, bottle ];
        setCart(newCart);
        console.log(newCart)
    }
    
    return (
        <div>
            <h1>Collect Your Bottles: {bottles.length}</h1>
            <p>Total Added: {cart.length}</p>
            <div className='bottles-container'>
                {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;