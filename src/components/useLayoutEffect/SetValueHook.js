import React, { useEffect, useLayoutEffect, useState } from 'react';

const SetValueHook = () => {
    const [num, setNum] = useState(0);
    
    useEffect(() => {
        if(num === 0) {
            setNum(5 + Math.random() * 10);
        }
    }, [num]);
    console.log(num);

    useLayoutEffect(() => {
        if(num === 0) {
            setNum(5 + Math.random() * 10);
        }
    }, [num]);
    console.log("Use",num);

    return (
        <div>
            <h5>{num}</h5>
            <button onClick={() => setNum(0)}>Check</button>
        </div>
    )
}

export default SetValueHook