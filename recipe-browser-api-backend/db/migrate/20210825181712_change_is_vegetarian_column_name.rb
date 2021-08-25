class ChangeIsVegetarianColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :recipes, :is_vegetarian?, :is_vegetarian
  end
end
