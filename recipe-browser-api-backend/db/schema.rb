# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_26_225715) do

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
  end

  create_table "recipe_ingredients", force: :cascade do |t|
    t.integer "ingredient_id", null: false
    t.integer "recipe_id", null: false
    t.index ["ingredient_id"], name: "index_recipe_ingredients_on_ingredient_id"
    t.index ["recipe_id"], name: "index_recipe_ingredients_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "cuisine"
    t.text "description"
    t.boolean "is_vegetarian"
    t.string "image"
  end

  create_table "user_recipe_ingredients", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "recipe_id", null: false
    t.integer "ingredient_id", null: false
    t.index ["ingredient_id"], name: "index_user_recipe_ingredients_on_ingredient_id"
    t.index ["recipe_id"], name: "index_user_recipe_ingredients_on_recipe_id"
    t.index ["user_id"], name: "index_user_recipe_ingredients_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
  end

  add_foreign_key "recipe_ingredients", "ingredients"
  add_foreign_key "recipe_ingredients", "recipes"
  add_foreign_key "user_recipe_ingredients", "ingredients"
  add_foreign_key "user_recipe_ingredients", "recipes"
  add_foreign_key "user_recipe_ingredients", "users"
end
