import React from "react";
import { useState, useEffect } from "react";
import Director from "../Director/Director";


function Directors(props) {

    const [directors, setDirectors] = useState([]);
    const api_key = "fe80472bacff902901720dcdaf98e60c";

    useEffect(() => {
        fetch("https:/api.themoviedb.org/3/list/8251168?api_key=" + api_key, {
            "method": "GET",
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for(let i = 0; i < data.items.length; i++) {
                let movieId = data['items'][i]['id'];
                let credits = 'https:/api.themoviedb.org/3/movie/' + movieId + '/credits' +'?api_key=' + api_key;
                //fetches the credits for each movie on the list
                fetch(credits)
                .then(response => response.json())
                .then(data =>{  
                  //iterates through the credits to find the director
                  let directorFound = false;
                  let j = 0;
                  while (!directorFound){
                      let job = data['crew'][j]['job'];
                      if(job === 'Director'){
                          //stores and logs the director
                          let director =data['crew'][j];
        
                          let directorName =data['crew'][j]['name'];
                          let directorID = data['crew'][j]['id'];
                          let directorPic = data['crew'][j]['profile_path'];
                          directorFound = true;
                          console.log(director['profile_path']);
                          setDirectors(directors => [...directors, {name: directorName, id: directorID, profile_path: directorPic}]);
        
                      }
                      j += 1;
                  
                    }
                  });
              }
            });
        }, []);


    return (
        <div>
            <h1>Directors</h1>
            {
            directors && (
                <ul>
                    {directors.map(director => (
                        <li key={director.id}>
                            <Director
                                name={director.name}
                                id={director.id}
                                profile_path={director.profile_path}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default Directors;