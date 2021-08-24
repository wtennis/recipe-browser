class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :cuisine
      t.text :instructions
      t.boolean :is_vegetarian?
    end
  end
end
