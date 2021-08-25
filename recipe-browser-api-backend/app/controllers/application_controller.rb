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

end
