import React, { useMemo, useState } from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCountrTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCountrTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <h5>useEffect Hook for cache the value</h5>
            <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            
            <button onClick={incrementTwo} style={{marginLeft: "10px"}}>Counter Two - {counterTwo}</button>
        </div>
    )
}

export default Counter