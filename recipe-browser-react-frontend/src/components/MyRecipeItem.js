import React, { useState } from 'react';

function MyRecipeItem({ recipe, searchResults, setSearchResults }){
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({name: "", id: null})
    const [style, setStyle] = useState("column is-one-quarter")
    const [ingredientHover, setIngredientHover] = useState(false)


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
        <div 
        onMouseEnter={() => setStyle("column is-one-quarter")}
        onMouseLeave={() => setStyle("column is-one-quarter")}
        className={style}>
             <div className="box">
                <p className="title is-5">{recipe.name}</p>
                <span>
                    <img src={recipe.image} alt={recipe.name} />
                </span>
                <p className="subtitle">{recipe.description}</p>
                <button className = "button is-danger is-small is-rounded" onClick = {handleDeleteClick}>
                    <span className="icon is-small">
                        <i class="far fa-trash-alt"></i>
                    </span>
                    <span>Delete this recipe</span>
                </button>
       
        {ingredients.length?
                    <>
                    <button className = "button is-info is-small is-rounded" onClick = {() => setIngredients([])}>Hide Ingredients</button>
                    <ul>Ingredients</ul>
                    {ingredients.map(i => (
                        <li key = {i.id}
                        onMouseEnter={() => setIngredientHover(true)}
                        onMouseLeave={() => setIngredientHover(false)}
                        >
                            {ingredientHover? 
                                    <button className="button is-danger is-small is-light is-rounded" onClick={() => handleRemoveIngredient(i.id)}>
                                        <span className="icon is-small">
                                            <i class="far fa-trash-alt"></i>
                                        </span>
                                    </button>
                                : 
                                    null
                                    }
                            <span> {i.name}</span>
                        </li>
                    ))}

                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newIngredient.name}
                        onChange={(e) => setNewIngredient({name: e.target.value, id: null})}
                    />
                    <button className = "button is-success is-small is-rounded" type = "submit" onClick = {handleAddIngredient}>Add ingredient</button>
                
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

export default MyRecipeItem;
