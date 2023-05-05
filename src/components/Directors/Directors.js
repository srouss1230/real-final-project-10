import React from "react";
import { useState, useEffect } from "react";
import Director from "../Director/Director";
import './Directors.css'


function Directors(props) {
    const [directors, setDirectors] = useState([]);
    const api_key = "fe80472bacff902901720dcdaf98e60c";
   
    useEffect(() => {
        fetch("https:/api.themoviedb.org/3/list/8251168?api_key=" + api_key, {
            "method": "GET",
        })
        .then(response => response.json())
        .then(data => {
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
                          //fetches a picture for the director
                          let pictures = 'https:/api.themoviedb.org/3/person/' + director['id'] + '/images' +'?api_key=' + api_key;
                            fetch(pictures)
                            .then(response => response.json())
                            .then(data =>{
                                if(data['profiles'][0] != null){
                                    
                                    let directorPic = 'https://image.tmdb.org/t/p/w500' + data['profiles'][0]['file_path'];
                                    setDirectors(directors => [...directors, {name: directorName, id: directorID, profile_path: directorPic}]);

                                }
                                else{
                                    
                                    let directorPic = null;
                                    setDirectors(directors => [...directors, {name: directorName, id: directorID, profile_path: directorPic}]);
                                }
                            });
                          
                          directorFound = true;
                        //   setDirectors(directors => [...directors, {name: directorName, id: directorID, profile_path: directorPic}]);
        
                      }
                      j += 1;
                  
                    }
                  });
              }
            });
        }, []);

    const grabInfo = (e) => {
        const directorID = e.currentTarget.querySelector('.directorID').innerHTML;
        const directorName = e.currentTarget.querySelector('.directorName').innerHTML;
        // alert(directorName + ": " + directorID);

        let directorLink = 'https:/api.themoviedb.org/3/person/' + directorID + '/movie_credits' +'?api_key=' + api_key;
        fetch(directorLink)
        .then(response => response.json())
        .then(data =>{
            for (let j =0; j < data['crew'].length; j++){
                let job = data['crew'][j]['job'];
                    if(job === 'Director'){
                        let movieTitle = data['crew'][j]['title'];
                        let movieID = data['crew'][j]['id'];
                    }
            }
            

        });

    }

    return (
        <div>
            <h1 className = "titleOfPage">Directors</h1>
            {
            directors && (
                <div className = "directorsContainer">
                    {directors.map(director => (
                        <div className = "directorContainer" key={director.id}>
                            <Director
                                name={director.name}
                                id={director.id}
                                profile_path={director.profile_path} 
                                grabInfo={grabInfo}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}

export default Directors;