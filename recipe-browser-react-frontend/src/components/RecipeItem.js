import React, { useState } from 'react';

function RecipeItem({ recipe }){
    const [ingredients, setIngredients] = useState([])
    const [style, setStyle] = useState("column is-3")



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
        onMouseEnter={() => setStyle("column is-3")}
        onMouseLeave={() => setStyle("column is-3")}
        className={style}>
            <div className="box">
             <span className="title is-5">{recipe.name}</span>
                <span>
                    <img src={recipe.image} alt={recipe.name} />
                </span>
                <p className="subtitle">{recipe.description}</p>                
                <button className="button is-success is-small is-rounded" onClick={handleSaveClick}>
                    <span className="icon is-small">
                        <i className="fas fa-check"></i>
                    </span>
                    <span>Save</span>
                 </button>

        {ingredients.length?
                    <>
                        <button className = "button is-info is-small is-rounded" onClick={() => setIngredients([])}>Hide Ingredients</button>
                        <div className="content">
                            <hr></hr>
                            <h5>Ingredients</h5>
                                <ul>
                                    {ingredients.map(i => (
                                        <li key = {i.id}>{i.name}</li>
                                    ))}    
                                </ul>       
                        </div>     
                    </>
                :                    
                    <button className="button is-info is-small is-rounded" onClick={handleShowIngredientsClick}>
                        <span className="icon is-info is-small is-rounded">
                            <i class="fas fa-list"></i>             
                        </span>
                        <span>Ingredients</span>
                    </button>
                }
            </div>
        </div>
    
      );
}

export default RecipeItem;
