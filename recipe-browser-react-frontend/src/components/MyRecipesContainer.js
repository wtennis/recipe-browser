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
                      style= {{display:"inline-block", marginLeft: "10px"}}
                      type="text"
                      placeholder="Search recipes..."
                      value={searchTerm}
                      onChange={handleChange}
                />
                <hr></hr>
                    <div className = "columns is-multiline is-variable is-vcentered">
                      {searchResults.map((recipe) => (
                          <MyRecipeItem key={recipe.id} recipe={recipe} searchResults={searchResults} setSearchResults={setSearchResults}/>
                      ))}
                    </div>
                </div>
            :
                <div style={{marginLeft: "auto", marginRight: "auto", width: "50px", marginTop: "50px"}}>
                  <i className="loader"></i>
                </div>    }
    </>
);

}

export default MyRecipesContainer;
