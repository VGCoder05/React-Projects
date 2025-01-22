import React, { useState } from 'react';
import './style/Counter.css';

const Conter = () => {
    const [val, setVal] = useState(0);

    const increment = ()=>{
        setVal((val)=>val+1);
    }

    const decrement = ()=>{
        setVal((val) => val-1);
    }

    const reset = ()=>{
        setVal(0);
    }

    return (
        <div className='container'>
            {/* Counter Display Section */}
            <div className="counter-display">
                <p className="counter-value">{val}</p>
            </div>

            {/* Buttons Section */}
            <div className="button-group">
                <button onClick={increment} className="btn increment">Increment</button>
                <button onClick={decrement} className="btn decrement">Decrement</button>
                <button onClick={reset} className="btn reset">Reset</button>
            </div>
        </div>
    );
};

export default Conter;