import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <div className = "content">
      <span>
        <img style={{display:"inline-block", marginRight: "10px", marginLeft: "30px"}} src= "../food-icon5.png" className = "icon"></img>
        <h1 style={{display:"inline-block", color: "#167A8B", fontFamily: "cursive"}} className="title is-1">Home Chef</h1>
      </span>
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul> 
             <li>
            <NavLink activeClassName="active-navlink" style= {{color: "#167A8B", marginTop: ".25em"}} exact to="/">Home</NavLink>
              </li>
              <li>
              <NavLink activeClassName="active-navlink" style= {{color: "#167A8B"}} to="/recipes">Recipes</NavLink>
              </li>
              <li>
              <NavLink activeClassName="active-navlink" style= {{color: "#167A8B"}}to="/my_recipes">My Recipes</NavLink>
              </li>
              <li>
            <NavLink activeClassName="active-navlink" style= {{color: "#167A8B"}}to="/ingredients">Ingredients</NavLink>
            </li>
          </ul>
        </nav>     
    </div>
  );
}

export default Navbar;