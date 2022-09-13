import React, { useEffect, useLayoutEffect } from 'react';

const LayoutEffect = () => {
    useEffect(() => {
        console.log("First useEffect");
    }, []);

    useLayoutEffect(() => {
        console.log("Second useEffect");
    }, []);

    useEffect(() => {
        console.log("Third useEffect");
    }, []);

    return (
        <div>
            <h5>LayoutEffect</h5>
            <p>If we use the hook "useLayoutEffect", then it will render before the page load(it will run first). That's the difference between useEffect and useLayoutEffect.</p>
        </div>
    )
}

export default LayoutEffect