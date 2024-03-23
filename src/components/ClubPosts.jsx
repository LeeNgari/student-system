import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { doc } from "firebase/firestore"; 
export default function ClubPost({db}){

    const {id} = useParams()
    
   
   
    return(
        <div className="events">


        </div>
    )
}