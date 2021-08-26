import React, { useState, useEffect } from 'react';
import IngredientItem from './IngredientItem';


function IngredientsContainer(){
const [ingredients, setIngredients] = useState([])
const [newIngredient, setNewIngredient] = useState("")

// fetch all ingredients
//set ingredients useState map over each ingredient and send it down to IngredientsItem

const URL = "http://localhost:9292/ingredients"

useEffect(() => {
    async function fetchIngredients() {
        const res = await fetch(URL, {
            headers: { Accept: 'application/json' }
        })

        const parsedBody = await res.json();

        setIngredients(parsedBody);
        }

    fetchIngredients();
    }, [])

    function handleAddIngredient() {
        
        fetch("http://localhost:9292/ingredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newIngredient
            }),
            })
            .then((r) => r.json())
            .then(newI => setIngredients([...ingredients, newI]));
    }

  return (
    <div>
        <>
            {ingredients.length !== 0? 
                    <div>
        
                    <h1>This is IngredientsContainer</h1>
                    
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                    />
                    <button type = "submit" onClick = {handleAddIngredient}>Add ingredient</button>

                    {ingredients.map((ingredient) => (
                            <IngredientItem key = {ingredient.id} ingredient={ingredient}/>
                        ))}
                    
                    </div>
                :
                    <h1>Loading...</h1>
            }
        </>

    </div>
  );
}

export default IngredientsContainer;
