import React, { useState } from 'react';
import axios from 'axios';


function AxiosApi(){

    let [photos, setPhotos] = useState([]);

    function searchApi(){
        const url = "https://jsonplaceholder.typicode.com/photos";
        axios.get(url)
        .then(function(response){
            setPhotos(response.data);
            console.log("성공");
        })

        .catch(function(error){
            console.log("실패");
        })
  
    }

    if(photos.length > 0) {
        return (
            photos.map(photo => (
                (photo.id < 10) ? (
                    <div key={photo.id}>
                        <img src = {photo.thumbnailUrl} alt="img"/>
                        <p>title : {photo.title}</p>
                    </div>)
                    : null
                )
            )
        );
    }
    else{
        return(
            <div>
                <button onClick={searchApi}>불러오기</button>
            </div>
        )
    }
} 
export default AxiosApi;