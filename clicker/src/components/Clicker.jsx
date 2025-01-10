import React, { useState } from 'react'
import './style/Counter.css'

const Clicker = () => {
    const [val,setVal] = useState(0)

    // Function to increase the value
    const Increment = () => {
        setVal((val)=>val+1)        
    }
    // Function to decrease the value
    const Decrement = () => {
        setVal((val)=>val-1)
    }
    // Function to Reset the value
    const Reset = () => {
        setVal(0)
    }
    return (
        <div className='container'>
            <div className="counter-display">
                <p className="counter-val">{val}</p>
            </div>
            <div className="btn-group">
                <button onClick={Increment} className="btn increment">Increment</button>
                <button onClick={Decrement} className="btn decrement">Decrement</button>
                <button onClick={Reset} className="btn reset">Reset</button>
            </div>
        </div>
    )
}

export default Clicker