// 9. To add Styles in react

import React from 'react'

// Applying styles
// 1. CSS stylesheet
// 2. inline Styling

// 1. CSS stylesheet
import '../Styles/Styles.css';

// 2. inline
const heading = {
    color : 'red',
    fontSize : '100px'
}


function Styles() {
    // 1.
    let succesClass = 'text-success';

    return (
        <div>
            {/* // 1. CSS Stylesheet */}
            <h1 className="text-success"> Appied Style Sheet </h1> 
            <h1 className={succesClass}>Using Variable</h1> 
            {/* //or using template Literatls */}
             <h1 className={`${succesClass}`}>Template Literals</h1>

            {/* // 2. inline Styling   */}
            <h1 style={heading}>Inline Styling</h1> 
            {/* or use below */}
            <h1 style={{color:'deepskyblue', fontSize : '3rem'}}>Inline Styling</h1> 

        </div>
    )
}

export default Styles
