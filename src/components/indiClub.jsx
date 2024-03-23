import React from "react";
import { Link } from "react-router-dom"

export default function clb({image ,tags,about ,name}){

    const styles = {  
        backgroundImage:`url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
      
    return (
       
        <div className="club" >
           <Link
              to={`${name}`}
              key={name}
           ><button className="clb" >{name}</button></Link>
            
        </div>
        
   
    )
}