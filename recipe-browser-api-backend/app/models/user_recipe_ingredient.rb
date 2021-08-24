class UserRecipeIngredient < ActiveRecord::Base
    belongs_to :user
    belongs_to :recipe
    belongs_to :ingredient
end