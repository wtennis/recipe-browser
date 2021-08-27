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
        is_vegetarian: false,
        image: "https://images.dailyhive.com/20210115161039/shutterstock_796011997.jpg"
    },
    {
        name: "Baked Salmon",
        cuisine: "Scandinavian",
        description: "Fresh Norwegian salmon, lightly brushed with herbed Dijon mustard sauce.",
        is_vegetarian: false,
        image: "https://www.simplyrecipes.com/thmb/sVWZ5aEkdFvvf3uQkj7ow9_yRcE=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__01__Honey-Mustard-Salmon-LEAD-3-97dfe268629544428260455ea6d367fd.jpg"
    },
    {
        name: "Apple pie",
        cuisine: "American",
        description: "Granny Smith apples mixed with brown sugar and butter filling, in a flaky all-butter crust, with ice cream.",
        is_vegetarian: true, 
        image: "https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg"
    },
    {
        name: "Steak au poivre",
        cuisine: "French",
        description: "Filet mignon beef coated with coarsely cracked peppercorns. The peppercorns form a crust on the steak when cooked and provide a pungent but counterpoint to the beef",
        is_vegetarian: false, 
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/12/6/0/CC-alton-brown_steak-au-poivre-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371602797531.jpeg"
    }
    
]


recipes.map{|attrs| Recipe.create(attrs)}

10.times do Recipe.create(
    name: Faker::Food.dish,
    cuisine: Faker::Food.ethnic_category,
    description: Faker::Food.description,
    is_vegetarian: rand(2) == 1,
    image: "https://lorempixel.com/800/900/food"
)
end



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
    "cinnamon",
    "butter",
    "olive oil",
    "rosemary",
    "garlic"
]

ingredients.map{|name| Ingredient.create(name: name)}

# 40.times do 
#     Ingredient.create(
#         name: Faker::Food.ingredient
#     )
# end

#seed recipe_ingredients
puts "🌱 Seeding recipe_ingredients... 🌱"

Recipe.all.each do |r|
  RecipeIngredient.create(
        recipe_id: r.id,
        ingredient_id: rand(1..ingredients.length)
    )   
end

# RecipeIngredient.create(
#     recipe_id: 1,
#     ingredient_id: 10
# )

# RecipeIngredient.create(
#     recipe_id: 1,
#     ingredient_id: 1
# )

# RecipeIngredient.create(
#     recipe_id: 1,
#     ingredient_id: 3
# )

# RecipeIngredient.create(
#     recipe_id: 1,
#     ingredient_id: 11
# )

# RecipeIngredient.create(
#     recipe_id: 1,
#     ingredient_id: 14
# )

# RecipeIngredient.create(
#     recipe_id: 2,
#     ingredient_id: 2
# )

# RecipeIngredient.create(
#     recipe_id: 2,
#     ingredient_id: 15
# )

# RecipeIngredient.create(
#     recipe_id: 2,
#     ingredient_id: 16
# )

# RecipeIngredient.create(
#     recipe_id: 2,
#     ingredient_id: 17
# )

# RecipeIngredient.create(
#     recipe_id: 2,
#     ingredient_id: 8
# )

# RecipeIngredient.create(
#     recipe_id: 3,
#     ingredient_id: 5
# )

# RecipeIngredient.create(
#     recipe_id: 3,
#     ingredient_id: 10
# )

# RecipeIngredient.create(
#     recipe_id: 3,
#     ingredient_id: 11
# )

# RecipeIngredient.create(
#     recipe_id: 3,
#     ingredient_id: 1
# )

# RecipeIngredient.create(
#     recipe_id: 3,
#     ingredient_id: 12
# )

# RecipeIngredient.create(
#     recipe_id: 3,
#     ingredient_id: 13
# )



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

UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 2,
    ingredient_id: 1
)

UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 2,
    ingredient_id: 3
)

UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 2,
    ingredient_id: 2
)
UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 2,
    ingredient_id: 7
)
UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 2,
    ingredient_id: 8
)
UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 2,
    ingredient_id: 9
)
UserRecipeIngredient.create(
    user_id: 1,
    recipe_id: 2,
    ingredient_id: 15
)

puts "✅  Done seeding! ✅ "
