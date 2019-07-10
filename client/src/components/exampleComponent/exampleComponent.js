import React, { useState, useEffect, useContext } from 'react'

export default exampleComponent = ({ ...props }) => {
    const { prop_name1, prop_name2 } = props
    const [state, setState] = useState({
        'name': '',
        'title': '',
        'balance': 0
    })
    
    return (
        <>
            <div>This is the example component.</div>
            <div>This is the state: {state}</div>
        </>
    )

}