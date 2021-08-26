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

  post "/ingredients" do 
    new_ingredient = Ingredient.find_or_create_by(name: params[:name])
    new_ingredient.to_json
  end

  delete "/ingredients/:id" do
    
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

  post "/recipes/:id/ingredients" do
    # ingr = Ingredient.find_or_create_by(ingredient_params)
    # RecipeIngredient.create(recipe_id: params[:id], ingredient_id: ingr.id)
    # recipe = Recipe.find(params[:id])
    # recipe.ingredients.to_json
  end

  

end
