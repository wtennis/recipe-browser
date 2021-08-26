import React, { useState, useEffect } from 'react';
import RecipeItem from './RecipeItem';

function RecipesContainer(){
  const [recipes, setRecipes] = useState([])

  const URL = "http://localhost:9292/recipes"

  useEffect(() => {
    async function fetchRecipes() {
        const res = await fetch(URL, {
            headers: { Accept: 'application/json' }
        })

        const parsedBody = await res.json();

        setRecipes(parsedBody);
        }

fetchRecipes();
}, [])

  return (
    <>
        {recipes.length !== 0? 
                <div>
      
                <h3>This is RecipesContainer</h3>
                
                {recipes.map((recipe) => (
                        <RecipeItem key = {recipe.id} recipe={recipe}/>
                    ))}
                
                </div>
            :
                <h1>Loading...</h1>
    }
    </>
);

}

export default RecipesContainer;
