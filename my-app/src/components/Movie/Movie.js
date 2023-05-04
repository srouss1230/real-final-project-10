import React from "react";
import { useState, useEffect } from "react";
import './Movie.css'

function Movie(props){

    const [picture, setPicture] = useState([]);
    const id = props.id;
    const name = props.name;
    useEffect(() => {
        fetch ("https://api.themoviedb.org/3/movie/" + id + "/images?api_key=fe80472bacff902901720dcdaf98e60c")
        .then(response => response.json())
        .then(data => {
            console.log("https://image.tmdb.org/t/p/original/" + data.posters[0].file_path);
            setPicture ("https://image.tmdb.org/t/p/original/" + data.posters[0].file_path);
            // setPicture(picture => [ { profile_path: "https.image.tmdb.org/t/p/original/" + data.posters[0].file_path}])
            
        })
    }, []);
    // const [picture, setPicture] = useState([]);
    // useEffect(() => {
    //     let pictures = 'https:/api.themoviedb.org/3/movie/' + props.id + '/images' +'?api_key=' + api_key;
    //     fetch(pictures)
    //     .then(response => response.json())
    //     .then(data =>{
    //         if(data[0] != null){
                                    
    //             let moviePic = 'https://image.tmdb.org/t/p/w500' + data[0]['file_path'];
    //             setPicture(picture => [ { profile_path: moviePic}]);

    //         }
    //         else{
                
    //             let moviePic = null;
    //             setPicture(picture => [ { profile_path: moviePic}]);
    //         }
    //     });
    // }, []);

    const api_key = "fe80472bacff902901720dcdaf98e60c";
    return(
        <div>
            <span className="movieName">{name}</span>
            <br></br>

            <img className = "moviePoster" src={picture} alt="could not load"></img>

        </div>
    )
}
export default Movie;