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


  get "/my_recipes" do 
    User.first.recipes.to_json
  end

  get "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.to_json
  end

  get "/recipes/:id/ingredients" do
    recipe = Recipe.find(params[:id])
    recipe.ingredients.to_json
  end

  post "/recipes/:id/ingredients" do
    new_ingredient = RecipeIngredient.create({ingredient_id: params[:ingredient_id], recipe_id: params[:id]})
    new_ingredient.to_json
  end

  

end
