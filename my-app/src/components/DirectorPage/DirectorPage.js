import React from "react";
import { useState, useEffect } from "react";

import './DirectorPage.css'
import { Link } from 'react-router-dom';
function DirectorPage(props){
    return(
        <div>
            <h1>Director Page</h1> 
            {<Link to ="/Directors">Go Back</Link>}
        </div>
    );

}
export default DirectorPage;