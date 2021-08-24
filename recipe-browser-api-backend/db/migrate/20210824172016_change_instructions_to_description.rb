class ChangeInstructionsToDescription < ActiveRecord::Migration[6.1]
  def change
    rename_column :recipes, :instructions, :description
  end
end
