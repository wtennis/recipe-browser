import React, { useState } from 'react';

function RecipeItem({ recipe }){
    const [ingredients, setIngredients] = useState([])
    const [style, setStyle] = useState("column")



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
        <div 
        onMouseEnter={() => setStyle("column is-one-fifth")}
        onMouseLeave={() => setStyle("column")}
        className={style}>
            <div className="box">
                <p className="title is-5">{recipe.name}</p>
                <span>
                    <img src={recipe.image} alt={recipe.name} />
                </span>
                <p className="subtitle">{recipe.description}</p>
                <button className = "button is-primary is-small" onClick={handleSaveClick}>Save this recipe</button>

        {ingredients.length?
                    <>
                        <button className = "button is-info is-small" onClick={() => setIngredients([])}>Hide Ingredients</button>
                        <ul>Ingredients</ul>
                        {ingredients.map(i => (
                            <li key = {i.id}>{i.name}</li>
                        ))}                
                    </>
                :
                    <button className = "button is-info is-small" onClick = {handleShowIngredientsClick}>Show Ingredients</button>
                    
                }
            </div>
        </div>
    
      );
}

export default RecipeItem;
