import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const[count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <h5>HookCounterTwo For Previous State</h5>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)} style={{marginLeft: '10px'}}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)} style={{marginLeft: '10px'}}>Decrement</button>
            <button onClick={incrementFive} style={{marginLeft: '10px'}}>Increment By 5</button>
        </div>
    )
}

export default HookCounterTwo