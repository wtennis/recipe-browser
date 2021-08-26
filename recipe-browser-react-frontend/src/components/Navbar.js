import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
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