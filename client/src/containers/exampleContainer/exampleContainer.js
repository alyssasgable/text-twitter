import React, { useState, useEffect, useContext } from 'react'

import exampleComponent from '../../components/exampleComponent'

export default exampleContainer = ({ ...props }) => {
    const { prop_name1, prop_name2 } = props
    const [intro, setIntro] = useState('')
    
    setIntro('This is the example container.')
    
    return (
        <>
            <div>{ intro }</div>
            <exampleComponent />
        </>
    )

}