import React, { useState } from 'react'

function HookCounterThree() {

    const[name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <h5>HookCounterThree useState with object</h5>
            <form>
                <input 
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value})}
                />
                <input 
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName: e.target.value})}
                    style={{marginLeft: '10px'}}
                />
                <h4>Your first name is : {name.firstName}</h4>
                <h4>Your last name is : {name.lastName}</h4>
            </form>
        </div>
    )
}

export default HookCounterThree