import React, { useState } from 'react';

function RecipeItem({ recipe }){
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

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
            .then(data => {
                setIngredients(data);
                console.log(data)
            });
    }

    function handleAddIngredient() {
        console.log(newIngredient)
        // Post new row to RecipeIngredient with appropriate recipe_id and ingredient_id
    }


    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick = {() => handleConsoleOneRecipeClick(recipe.id)}>Console.log this recipe</button>

       
        {ingredients.length === 0?
                <button onClick = {handleIngredientsClick}>Ingredients</button>
            :
                <>
                    <ul>Ingredients</ul>
                    {ingredients.map(i => (
                    <li key = {i.id}>{i.name}</li>
                    ))}

                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                    />
                    <button type = "submit" onClick = {handleAddIngredient}>Add ingredient</button>
                
                </>
        }

        </div>
    
      );
}

export default RecipeItem;
