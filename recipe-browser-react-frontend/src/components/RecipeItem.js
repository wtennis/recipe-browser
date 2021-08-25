import React from 'react';

function RecipeItem({ recipe }){

function handleDeleteClick() {
    console.log('delete click')
}


    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick = {() => handleDeleteClick(recipe.id)}>Delete</button>
        </div>
    
      );
}

export default RecipeItem;
