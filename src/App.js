import React from "react";
import "./App.css";
import NavSidebar from "./NavSidebar/NavSidebar";
import NavBar from "./NavBar/NavBar";
import BoxActivityCard from "./BoxActivityCard/BoxActivityCard";
import FormActiviy from "./ActivityCard/FormActivity/FormActivity";

function App() {
  return (
    <div className="App">
      <NavSidebar />
      <div className="content">
        <NavBar />
        {/* <BoxActivityCard / > */}
        <FormActiviy />
         
        
        {/* Your other content will go here */}
        <div className="main-content">
       
        </div>
      </div>
    </div>
  );
}

export default App;

