import React, { useState, useEffect } from 'react';
import RecipeItem from './RecipeItem';

function RecipesContainer(){
  const [recipes, setRecipes] = useState([])
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);


  const URL = "http://localhost:9292/recipes"

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
                    style= {{display:"inline-block", marginLeft: "10px"}}
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <hr></hr>
                    <div className = "columns is-multiline is-variable is-vcentered">
                        {searchResults.map((recipe) => (
                            <RecipeItem key={recipe.id} recipe={recipe}/>
                        ))}
                    </div>
                </div>
            :
                <span className="loader"></span>
    }
    </>
);

}

export default RecipesContainer;
