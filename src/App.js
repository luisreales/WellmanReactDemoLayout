import React from "react";
import "./App.css";
import NavSidebar from "./NavSidebar/NavSidebar";
import NavBar from "./NavBar/NavBar";
import BoxActivityCard from "./BoxActivityCard/BoxActivityCard";

function App() {
  return (
    <div className="App">
      {/* <NavSidebar /> */}
      <div className="content">
        <NavBar />
        <BoxActivityCard / >
        
         
        
        {/* Your other content will go here */}
        <div className="main-content">
       
        </div>
      </div>
    </div>
  );
}

export default App;

