import React from "react";

export default function posts({title , value}){
    const trans = value.value.slice(0, 200)
  return(
    
        <div className="post">
            <h2><a href="#">{title}</a></h2>
            <p>{trans}</p>
            <div className="author-date">
                <h5>{value.author}</h5>
                <h5>12/01/2024</h5>
            </div>
        </div>
 
    )
}
