import './Director.css'
import DirectorPage from "../DirectorPage/DirectorPage";
import {Router,Route, useNavigate } from "react-router-dom";

function Director(props){
    // const nav = useNavigate();
    // const onClickHandler = () => { nav('/DirectorPage/DirectorPage')};
    return(
        <div onClick={props.grabInfo}>
            <img className = "directorPic" src={props.profile_path} alt="could not load"></img>
            <br></br>
            <span className='directorName'> {props.name} </span>
            <span className = "directorID">{props.id}</span>
        </div>
      

    );
}
export default Director;