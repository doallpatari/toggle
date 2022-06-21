import React from "react"
import logo from "../img/logo.png"

export default function Navbar(props){
    return(
    <nav className={props.darkMode ? "dark" : ""}>
        <img 
            className="nav--logo_icon"
            src={logo}
         />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <div className="toggler">
            <p className="toggler--light">Light</p>
            <div className="toggle--slider" onClick={props.toggleDarkMode}>
                <div className="toggle--slider--circle"></div>
            </div>
            <p className="toggle--dark">Dark</p>
        </div>
    </nav>
)}