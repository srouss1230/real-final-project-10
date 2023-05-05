import React from "react";
import { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import './DirectorPage.css'
import { Link, Router } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
function DirectorPage(props){
    const api_key = "fe80472bacff902901720dcdaf98e60c";
    const location = useLocation();
    const name = location.state.name;
    const id = location.state.id;
    const profile_path = location.state.profile_path;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        let directorLink = 'https://api.themoviedb.org/3/person/' + id + '/movie_credits' +'?api_key=' + api_key;
        fetch(directorLink)
        .then(response => response.json())
        .then(data =>{
            
            for (let j =0; j < data['crew'].length; j++){
                let job = data['crew'][j]['job'];
                    if(job === 'Director'){
                        let movieTitle = data['crew'][j]['title'];
                        let movieID = data['crew'][j]['id'];
                        setMovies(movies => [...movies, {name: movieTitle, id: movieID}]);
                                  
                    }
                   
            }
            
          });
    }, []);
    // let pictures = 'https:/api.themoviedb.org/3/movie/' + props.id + '/images' +'?api_key=' + api_key;
    //     fetch(pictures)
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         if(data[0] != null){
                                    
    //             // let moviePic = 'https://image.tmdb.org/t/p/w500' + data[0][''];
    //             // setMovies(movies => [ ...movies, { profile_path: moviePic}]);

    //         }
    //         else{
                
    //             // let moviePic = null;
    //             // setMovies(movies => [ ...movies, { profile_path: moviePic}]);
    //         }
    //     });
        //would fetch a director's movies if, but this and the picture fetches can't both happen or I won't be able to grab one or the other into the state

    return(
        <div className = "pageContainer">

            <div className = "topBar">
                <img className = "directorPagePic" src={profile_path} alt="could not load"></img>
                
                <h1 className="directorPageName">{name}</h1> 
                    {<Link to ="/Directors">
                        <button className = "closeDirectorPage">
                            X
                        </button>
                    </Link>}

            </div>
        {
        movies && (
            <div className = "moviesContainer">
                {movies.map(movie => (
                    <div className = "movieContainer" key={movie.id}>
                        <Movie
                            name={movie.name}
                            id={movie.id}
                            // profile_path={movie.profile_path}
                        />
                    </div>
                ))}
            </div>
        )}
    </div>
  );}
export default DirectorPage;

