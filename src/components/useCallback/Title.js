import React from 'react'

function Title() {
    console.log("Rendering Title");
    return (
        <div>
            <h5>useCallback Hook</h5>
            <p>The useCallback hook is used when you have a component in which the child is rerendering again and again without need. It is helpful in performance optimization. (It cache the function)</p>
        </div>
    )
}

export default React.memo(Title)