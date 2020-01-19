import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";


const Navbar = () => {

  const {isLightTheme, light, dark} = useContext(ThemeContext) ;
  const theme = isLightTheme ? light : dark ;

  return (
    <div className="navbar"  style={{background:theme.ui,color:theme.syntax}}>
      <h2>Reading List</h2>
    </div>
  )
  
}

export default Navbar