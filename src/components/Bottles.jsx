import React, { use } from 'react';
import Bottle from './Bottle';

const Bottles = ({ bottobottlesPromise }) => {
    const bottles = use(bottobottlesPromise)
    
    return (
        <div>
            <h1>Collect Your Bottles</h1>
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;