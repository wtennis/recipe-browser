import React, { useState } from 'react';

function RecipeItem({ recipe }){
    const [ingredients, setIngredients] = useState([])

    function handleSaveClick() {
        fetch("http://localhost:9292/my_recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_id: recipe.id
            }),
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
            <button onClick={handleSaveClick}>Save this recipe</button>
       
        {ingredients.length?
                <>
                <button onClick={() => setIngredients([])}>Hide Ingredients</button>
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
