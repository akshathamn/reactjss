import React from 'react';
const Dob=(props)=>{
    console.log(props);
    return(
        <div>
        Name:{props.children}|D.O.B:{props.Name}
        </div>
    )
    }
export default Dob;