class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/" do
    "test"
  end
  
  get "/recipes" do
    Recipe.all.to_json
  end
  
  get "/ingredients" do
    Ingredient.all.to_json
  end

end
