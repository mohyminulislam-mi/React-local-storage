import React from 'react';
import './bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const {name, img, price} = bottle;
    
    return (
        <div className='bottle card'>
            <img src={img} />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;