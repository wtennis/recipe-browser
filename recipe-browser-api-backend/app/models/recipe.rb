class Recipe < ActiveRecord::Base
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    #^^^ this line means that Recipe.first.ingredients will always yield the ingredients associated with this recipe in the recipe_ingredients table (the list of standard recipes)
    has_many :user_recipe_ingredients
    # has_many :ingredients, through: :user_recipe_ingredients 
    #^^^ this line won't work because the code won't know whether to search for ingredients in recipe_ingredients(standard list of recipes) of user_recipe_ingredients(user-created custom list of recipes)

    def add_ingredients(arr_of_ingredient_ids)
        arr_of_ingredient_ids.each do |id|
            RecipeIngredient.find_or_create_by(
                recipe_id: self.id,
                ingredient_id: id
            )
        end
    end

end