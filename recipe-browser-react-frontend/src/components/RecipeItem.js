import React, { useState } from 'react';

function RecipeItem({ recipe }){
    const [ingredients, setIngredients] = useState([])

    function handleConsoleOneRecipeClick() {
        fetch(`http://localhost:9292/recipes/${recipe.id}`, {
          method: "GET",
        })
          .then((r) => r.json())
          .then(console.log);
      }


    function handleIngredientsClick() {
        console.log('handleIngredientsClick')
        
        fetch(`http://localhost:9292/recipes/${recipe.id}/ingredients`)
            .then((r) => r.json())
            .then(console.log);

    }


    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick = {() => handleConsoleOneRecipeClick(recipe.id)}>Console.log this recipe</button>

       
        {ingredients.length === 0?
            <button onClick = {handleIngredientsClick}>Ingredients</button>
            :
            <h4>Ingredients...</h4>
        }

        </div>
    
      );
}

export default RecipeItem;
