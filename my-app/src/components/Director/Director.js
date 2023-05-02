import './Director.css'

function Director(props){
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