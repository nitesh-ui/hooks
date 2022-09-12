import React, { useEffect, useRef } from 'react';

const FocusInput = () => {

    const inputRef = useRef(null) 

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <h5>useRef Hook</h5>
            <input type="text" ref={inputRef} />
        </div>
    )
}
export default FocusInput