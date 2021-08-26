import React, { useState, useEffect } from 'react';
import MyRecipeItem from './MyRecipeItem';


function MyRecipesContainer(){
  const [recipes, setRecipes] = useState([])
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);


  const URL = "http://localhost:9292/my_recipes"

  useEffect(() => {
    async function fetchRecipes() {
        const res = await fetch(URL, {
            headers: { Accept: 'application/json' }
        })

        const parsedBody = await res.json();

        setRecipes(parsedBody);
        setSearchResults(parsedBody)
        }

    fetchRecipes();
    }, [])

    useEffect(() => {
        const results = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };


  return (
    <>
        {recipes.length !== 0? 
                <div>
                <br></br>
                    <input
                    type="text"
                    placeholder="Recipe name"
                    value={searchTerm}
                    onChange={handleChange}
                />

                    <h1>This is MyRecipes</h1>
                {searchResults.map((recipe) => (
                    <MyRecipeItem key={recipe.id} recipe={recipe}/>
                ))}

                </div>
            :
                <h1>Loading...</h1>
    }
    </>
);

}

export default MyRecipesContainer;
