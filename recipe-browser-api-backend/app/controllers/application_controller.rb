class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/" do
    "home"
  end
  
  get "/recipes" do
    Recipe.all.to_json
  end
  
  get "/ingredients" do
    Ingredient.all.to_json
  end

  get "/my_recipes" do 
    User.first.recipes.to_json
  end

  get "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.to_json
    # ingr = recipe.ingredients
    # recipe_with_ingredients = {
    #   name: recipe.name, 
    #   description: recipe.description, 
    #   cuisine: recipe.cuisine,
    #   is_vegetarian: recipe.is_vegetarian,
    #   ingredients: recipe.ingredients
    #  }
    # recipe_with_ingredients.to_json
  end

  get "/recipes/:id/ingredients" do
    recipe = Recipe.find(params[:id])
    recipe.ingredients.to_json
  end


end
