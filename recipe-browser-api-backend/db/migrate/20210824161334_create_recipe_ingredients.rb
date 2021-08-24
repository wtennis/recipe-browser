class CreateRecipeIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_ingredients do |t|
      t.references :ingredient, foreign_key: true, null: false
      t.references :recipe, foreign_key: true, null: false
    end
  end
end
