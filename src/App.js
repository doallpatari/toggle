import Navbar from "./components/Navbar"
import Main from "./components/Main"
import React from "react"

export default function App(){
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode(prev=>!prev)
  }

  return(
    <div className="container">
      <Navbar 
        darkMode = {darkMode}
        toggleDarkMode = {toggleDarkMode}
      />
      <Main 
        darkMode = {darkMode}
      />
    </div>
  )
}