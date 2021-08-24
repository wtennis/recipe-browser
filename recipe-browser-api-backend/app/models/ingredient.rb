class Ingredient < ActiveRecord::Base
    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients
    #^^^ this line means that Ingredient.first.recipes will always yield the recipes associated with this ingredient in the recipe_ingredients table (the list of standard recipes)
    has_many :user_recipe_ingredients
    # has_many :recipes, through: :user_recipe_ingredients
      #^^^ this line won't work because the code won't know whether to search for recipes in recipe_ingredients(standard list of recipes) of user_recipe_ingredients(user-created custom list of recipes)
end