import React from 'react';

const Bottle = ({ bottle }) => {
    const {name, img, price} = bottle;
    
    return (
        <div>
            <img src={img} />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;