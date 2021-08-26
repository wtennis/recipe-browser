import React, { useState } from 'react';

function MyRecipeItem({ recipe }){
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({name: "", id: null})

    function handleConsoleOneRecipeClick() {
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

    function handleAddIngredient() {
        console.log(newIngredient)

        // First, find_or_create ingredient in master ingredients table
      fetch("http://localhost:9292/ingredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newIngredient.name
            }),
            })
            .then((r) => r.json())
            .then((newI) => {
                setNewIngredient({name: "", id: null})
                setIngredients([...ingredients, newI])
                // Then, POST new row to RecipeIngredient (associate the ingredient with a recipe)
                // OTHERWISE, ingredient will not show up with this recipe upon refresh
                fetch(`http://localhost:9292/recipes/${recipe.id}/ingredients`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ingredient_id: newI.id,
                    }),
                    });
            });

    }


    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick = {() => handleConsoleOneRecipeClick(recipe.id)}>Delete this recipe</button>
       
        {ingredients.length?
                    <>
                    <button onClick = {() => setIngredients([])}>Hide Ingredients</button>
                    <ul>Ingredients</ul>
                    {ingredients.map(i => (
                    <li key = {i.id}>{i.name}</li>
                    ))}

                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newIngredient.name}
                        onChange={(e) => setNewIngredient({name: e.target.value, id: null})}
                    />
                    <button type = "submit" onClick = {handleAddIngredient}>Add ingredient</button>
                
                </>
            :
                <button onClick = {handleShowIngredientsClick}>Show Ingredients</button>
        }

        </div>
    
      );
}

export default MyRecipeItem;
