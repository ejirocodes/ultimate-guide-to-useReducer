import React from 'react'

function Count({count, dispatch}) {
    return (
        <div>
            <p> Count: {count}</p>
           <button onClick={dispatch}>Increment</button>
        </div>
    )
}

export default Count
