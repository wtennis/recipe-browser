import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className = "content">
      <span>
        <img style={{display:"inline-block", marginRight: "10px"}} src= "../food-icon5.png" className = "icon"></img>
        <h1 style={{display:"inline-block"}} className= "">Home Chef</h1>
      </span>
      <div className="buttons has-addons">
        <nav>
          <button className="button is-inverted">
          <NavLink to="/">
            <span class="icon">
              <i class="fas fa-home"></i>
            </span>
          </NavLink>
          </button>
          <button className="button is-inverted">
            <NavLink to="/recipes">Recipes</NavLink>
          </button>
          <button className="button is-inverted">
            <NavLink to="/my_recipes">My Recipes</NavLink>
          </button>
          <button className="button is-inverted"> 
            <NavLink to="/ingredients">Ingredients</NavLink>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;