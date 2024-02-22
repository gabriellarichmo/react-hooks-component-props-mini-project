import React from "react";
import blogData from "../data/blog";

function Header(props){
  return(
    <div>
      <header>
        <h1>{props.name}</h1>
      </header>
    </div>
  )
}

export default Header;