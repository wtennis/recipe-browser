class UserRecipeIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :user_recipe_ingredients do |t|
      t.references :user, foreign_key: true, null: false
      t.references :recipe, foreign_key: true, null: false
      t.references :ingredient, foreign_key: true, null: false
    end
  end
end
