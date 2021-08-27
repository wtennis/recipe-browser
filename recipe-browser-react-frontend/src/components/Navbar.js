import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <span>
        <img src= "../food-icon5.png" className = "icon"></img>
        <h1 className= "">Home Chef</h1>
      </span>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/my_recipes">My Recipes</NavLink>
        <NavLink to="/ingredients">Ingredients</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;