import React, { useState } from "react";


import MyNavbar from "./MyNavbar";
import AppContainer from "./AppContainer";

// Importing the Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";   // imported in index.html
import "./App.css";


const App = () => (
    <>
        <MyNavbar />
        <AppContainer/>
    </>
);

export default App;
