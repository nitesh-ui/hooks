import React, { useState } from 'react'

function HookCounter() {

    const[count, setCount] = useState(0);

    return (
        <div>
            <h5>Hook Counter</h5>
            <button onClick={() => setCount(count + 1)}>Count {count} with hook</button>
        </div>
    )
}

export default HookCounter