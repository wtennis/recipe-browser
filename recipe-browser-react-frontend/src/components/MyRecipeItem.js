import React, { useState } from 'react';

function MyRecipeItem({ recipe, searchResults, setSearchResults }){
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({name: "", id: null})

    function handleDeleteClick() {
        fetch(`http://localhost:9292/my_recipes/${recipe.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(deleted => {
              console.log(deleted)
              setSearchResults(searchResults.filter((recipe) => recipe.id !== deleted.id));
          });
      }


      function handleShowIngredientsClick() {
                (fetch(`http://localhost:9292/my_recipes/${recipe.id}/ingredients`, {
                    method: "GET",
                })
                    .then((r) => r.json())
                    .then(data => {
                        setIngredients(data);
                    }))    
            }

    function handleAddIngredient() {
        
        if (ingredients.some(i => i.name === newIngredient.name)) {
            return
        } else 

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
                
                fetch(`http://localhost:9292/my_recipes/${recipe.id}/ingredients`, {
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

    function handleRemoveIngredient(ingr_id_to_delete) {
        console.log(ingr_id_to_delete)
        fetch(`http://localhost:9292/my_recipes/${recipe.id}/ingredients/${ingr_id_to_delete}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((r) => r.json())
        .then(deleted => {
            console.log(deleted)
            setIngredients(ingredients.filter((ingredient) => ingredient.id !== ingr_id_to_delete))
        });
    }

    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick = {handleDeleteClick}>Delete this recipe</button>
       
        {ingredients.length?
                    <>
                    <button onClick = {() => setIngredients([])}>Hide Ingredients</button>
                    <ul>Ingredients</ul>
                    {ingredients.map(i => (
                        <li key = {i.id}>
                            <button onClick={() => handleRemoveIngredient(i.id)}></button>
                            <span>{i.name}</span>
                        </li>
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
