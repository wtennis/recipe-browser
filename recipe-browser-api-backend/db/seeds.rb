puts "🔥 Destroying data... 🔥"

UserRecipeIngredient.destroy_all
UserRecipeIngredient.reset_pk_sequence

RecipeIngredient.destroy_all
RecipeIngredient.reset_pk_sequence

User.destroy_all
User.reset_pk_sequence

Recipe.destroy_all
Recipe.reset_pk_sequence

Ingredient.destroy_all
Ingredient.reset_pk_sequence

puts "🌱  Seeding data... 🌱"

#seed users

User.create(name: "Maya")
User.create(name: "Jesse")

#seed recipes

recipes = [
    {
        name: "Chicken and Waffles",
        cuisine: "American",
        description: "Breaded fried chicken with waffles. Served with maple syrup.",
        is_vegetarian: false
    },
    {
        name: "Smoked Salmon",
        cuisine: "Scandinavian",
        description: "Fresh Norwegian salmon, lightly brushed with herbed Dijon mustard sauce.",
        is_vegetarian: false
    },
    {
        name: "Apple pie",
        cuisine: "American",
        description: "Granny Smith apples mixed with brown sugar and butter filling, in a flaky all-butter crust, with ice cream.",
        is_vegetarian: true
    }
]


recipes.map{|attrs| Recipe.create(attrs)}

#seed ingredients

ingredients = [
    "eggs",
    "salmon",
    "chicken",
    "ribeye steak",
    "apples",
    "roquefort cheese",
    "chives",
    "dijon mustard",
    "crimini mushrooms",
    "flour",
    "brown sugar",
    "white sugar",
    "cinnamon"
]

ingredients.map{|name| Ingredient.create(name: name)}

40.times do 
    Ingredient.create(
        name: Faker::Food.ingredient
    )
end

#seed recipe_ingredients

RecipeIngredient.create(
    recipe_id: 1,
    ingredient_id: 1
)

RecipeIngredient.create(
    recipe_id: 1,
    ingredient_id: 3
)

RecipeIngredient.create(
    recipe_id: 1,
    ingredient_id: 11
)

RecipeIngredient.create(
    recipe_id: 1,
    ingredient_id: 11
)

RecipeIngredient.create(
    recipe_id: 2,
    ingredient_id: 2
)

RecipeIngredient.create(
    recipe_id: 2,
    ingredient_id: 8
)

RecipeIngredient.create(
    recipe_id: 3,
    ingredient_id: 5
)

RecipeIngredient.create(
    recipe_id: 3,
    ingredient_id: 10
)

RecipeIngredient.create(
    recipe_id: 3,
    ingredient_id: 11
)

RecipeIngredient.create(
    recipe_id: 3,
    ingredient_id: 1
)

RecipeIngredient.create(
    recipe_id: 3,
    ingredient_id: 12
)


#seed user_recipe_ingredients

UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 1,
    ingredient_id: 1
)

UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 1,
    ingredient_id: 3
)

UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 1,
    ingredient_id: 10
)


puts "✅  Done seeding! ✅ "
