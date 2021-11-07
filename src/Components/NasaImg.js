import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;

export default function NasaPicture(){

    const [ pictureData, setPictureData] = useState(null);

 useEffect( 
     () => {
         fetchPhoto();

         async function fetchPhoto(){
             const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey);
            
             const data = await res.json();

             setPictureData(data);
         }
     }, []

 );

 if(!pictureData) return <div />

 return (
     <div className="box">
     {pictureData.media_type === "image" ? ( <img  className = "image" src= {pictureData.url} alt = {pictureData.title} />
    ) : ( <iFrame 
    title="video"
    src={pictureData.url}
    frameBorder="0"
    gesture="media"
    allow="encrypted-media"
    allowFullScreen
    className="image"

    /> ) }
       <h2 className = "heading"> {pictureData.title} </h2>
     <h4 className = "date"> {pictureData.date}</h4>
     <p className = "explanation" > {pictureData.explanation} </p>
             

     </div>
 );



}