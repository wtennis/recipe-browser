import React, { useState } from 'react';

function RecipeItem({ recipe }){
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({name: "", id: null})

    function handleDeleteClick() {
        //fix this fetch to DELETE the all instances of this recipe from user_recipe_ingredients!
        fetch(`http://localhost:9292/recipes/${recipe.id}`, {
          method: "GET",
        })
          .then((r) => r.json())
          .then(console.log);
      }


    function handleShowIngredientsClick() {
                (fetch(`http://localhost:9292/recipes/${recipe.id}/ingredients`, {
                    method: "GET",
                })
                    .then((r) => r.json())
                    .then(data => {
                        setIngredients(data);
                    }))    
            }

    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick = {() => handleDeleteClick(recipe.id)}>Save this recipe</button>
       
        {ingredients.length?
                <>
                <button onClick = {() => setIngredients([])}>Hide Ingredients</button>
                   <ul>Ingredients</ul>
                   {ingredients.map(i => (
                   <li key = {i.id}>{i.name}</li>
                   ))}                
                </>
            :
                <button onClick = {handleShowIngredientsClick}>Show Ingredients</button>
        }

        </div>
    
      );
}

export default RecipeItem;
