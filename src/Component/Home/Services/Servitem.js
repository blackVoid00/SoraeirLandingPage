import React from 'react'
const Servitem=(props)=>{
    return(
       <div className="box">
        <props.icons/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
       </div>
    )

}
export default Servitem;