import React from "react";
import { useState, useEffect } from "react";

import './DirectorPage.css'
import { Link } from 'react-router-dom';
function DirectorPage(props){

        // //would fetch a director's movies if, but this and the picture fetches can't both happen or I won't be able to grab one or the other into the state
        // let directorLink = 'https:/api.themoviedb.org/3/person/' + directorID + '/movie_credits' +'?api_key=' + api_key;
        // fetch(directorLink)
        // .then(response => response.json())
        // .then(data =>{
        //     let movieTitles= [];
        //     let movieIDs = [];
        //     for (let j =0; j < data['crew'].length; j++){
        //         let job = data['crew'][j]['job'];
        //             if(job === 'Director'){
        //                 let movieTitle = data['crew'][j]['title'];
        //                 movieTitles.push(movieTitle);
        //                 let movieID = data['crew'][j]['id'];
        //                 movieIDs.push(movieID);
                                            
                                  
        //             }
                                        
        //     }
        //   });
    return(
        <div>
            <h1>Director Page</h1> 
            {props.name}
            {<Link to ="/Directors">Go Back</Link>}
        </div>
    );

}
export default DirectorPage;