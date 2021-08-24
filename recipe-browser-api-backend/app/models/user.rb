class User < ActiveRecord::Base
    has_many :user_recipe_ingredients
    has_many :recipes, through: :user_recipe_ingredients
    has_many :ingredients, through: :user_recipe_ingredients

    #method to add a recipe to user's custom list (user_recipe_ingredients)
end