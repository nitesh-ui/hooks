import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function HookCounterOne() {

    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <h5>HookCounterOne useEffect</h5>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne