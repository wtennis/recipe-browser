import React from 'react';


function IngredientItem({ingredient}){


  return (
    <div>
        <li key = {ingredient.id}>{ingredient.name}</li>
    </div>

  );
}

export default IngredientItem;
