import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Directors from "../Directors/Directors";
import DirectorPage from "../DirectorPage/DirectorPage";

function App(props) {

    return (
        <section>
            <Routes>
                <Route exact path="/Directors" element={<Directors/>} />
                <Route exact path="/DirectorPage" element={<DirectorPage/>} />
            </Routes>
        </section>
    );



}


export default App;