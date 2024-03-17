import React from "react";

export default function clb({image ,tags,about ,name}){

    const styles = {  
        backgroundImage:`url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
      
    return (
       
        <div className="club" >
        <button className="clb" >{name}</button>
                </div>
        
   
    )
}