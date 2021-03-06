import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
  var navBarButton = {

    display: "inline-block",
    backgroundColor: "blanchedalmond",
    border: "solid 2px burlywood",
  };
  var navBar = {
    borderRadius: "20px",
    display: "block",
    margin: "0% auto 0% auto",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "burlywood",
    width: "70%",
    textAlign: "center",
  };
  var navLink = {
    color: "black",
  };
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow mb-3">
      
      <div className = "container" style={navBar}>
        <button className="btn" style={navBarButton}><Link style={navLink} to = "/">Home</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink}  to = "/Yearbook">Yearbook</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink}  to = "/Teachers">Teachers</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/newstudent">Add a student</Link></button>
      </div>
    </nav>
  );
}
export default NavBar;