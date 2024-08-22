import React from "react";
import "./App.css";
import NavSidebar from "./NavSidebar/NavSidebar";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavSidebar />
      <div className="content">
        <NavBar />
        {/* Your other content will go here */}
        <div className="main-content">
          {/* Main content of your application */}
        </div>
      </div>
    </div>
  );
}

export default App;

