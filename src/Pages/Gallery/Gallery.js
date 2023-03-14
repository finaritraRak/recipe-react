import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Gallery.css'

export default function Gallery() {
   const[listeData, dataChange]=useState(null);


   useEffect(() => {
      fetch("http://localhost:1000/gallery").then((res) =>{
           return res.json();

      }).then((resp)=>{
          dataChange(resp);

      }).catch((err) => {
        console.log(err.message);
      })
    }, [])
  return (
    <>
 
  {
                      listeData && listeData.map(item=>(
                          <div key={item.id} className="galerie">
                          
                             <div className="item"><img src={process.env.PUBLIC_URL + `/img/${item.content}`} alt=""/></div>
                          </div>
                      ))
                     }

    
   
   
    


   </> 

  )
}
