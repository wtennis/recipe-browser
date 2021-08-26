class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/" do
    "home"
  end
  
  get "/recipes" do
    Recipe.all.to_json
  end

  
  get "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.to_json
  end
  get "/ingredients" do
    Ingredient.all.to_json
  end

  post "/ingredients" do 
    new_ingredient = Ingredient.find_or_create_by(name: params[:name])
    new_ingredient.to_json
  end

  get "/recipes/:id/ingredients" do
    recipe = Recipe.find(params[:id])
    recipe.ingredients.to_json
  end

  # Commented out because users should not be able to add ingredients to the masterlist of recipes!:
      # post "/recipes/:id/ingredients" do
      #   new_ingredient = RecipeIngredient.create({ingredient_id: params[:ingredient_id], recipe_id: params[:id]})
      #   new_ingredient.to_json
      # end

  get "/my_recipes" do 
    User.first.recipes.uniq.to_json
  end

  post "/my_recipes" do 
    ingredients = Recipe.find(params[:recipe_id]).ingredients
    saved_recipe = ingredients.each do |i|
      UserRecipeIngredient.find_or_create_by(user_id: 1, recipe_id: params[:recipe_id], ingredient_id: i.id)
    end
    saved_recipe.to_json
  end
  
  get "/my_recipes/:id/ingredients" do
    all_instances = UserRecipeIngredient.all.where(user_id: 1, recipe_id: params[:id])
    ingredient_ids = all_instances.pluck(:ingredient_id)
    Ingredient.where(id: ingredient_ids).to_json
  end

  post "/my_recipes/:id/ingredients" do
    new_ingredient = UserRecipeIngredient.find_or_create_by({user_id: 1, ingredient_id: params[:ingredient_id], recipe_id: params[:id]})
    new_ingredient.to_json
  end


end
