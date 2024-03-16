import React from "react";

export default function clb({image ,tags,about ,name}){

    const styles = {  
        backgroundImage:`url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
      
    return (
       
        <div className="club" style={styles}>
        <button className="clb" >{name}</button>
                </div>
        
   
    )
}