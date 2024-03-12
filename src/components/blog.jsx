import React from "react";

export default function blog({title ,value}){

    return(
        <div className="blog-post">
            <h3>{title}</h3>
            <div className="blog-author">
                <h5>{value.author}</h5>
                <h5>2/02/2024</h5>
            </div>
        </div>
    )
}