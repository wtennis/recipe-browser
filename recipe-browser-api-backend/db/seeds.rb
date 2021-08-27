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

showcase_recipes = [
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
    },
    {
        name: "Poke Ahi",
        cuisine: "Hawaiian",
        description: "Diced Mahi Mahi and Ahi tuna garnished with fresh vegetables served over a bed of rice.",
        is_vegetarian: false, 
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poke-bowl-221-1550260964.jpg?crop=0.605xw:0.908xh;0.184xw,0.0408xh&resize=480:*"
    },
    {
        name: "Tacos Vegetarianos ",
        cuisine: "Mexican",
        description: "Marinated in a spicy guajillo chili-based broth, the filling for these vegan tacos is transportive, especially when complimented with a garnsih of cilantro, radish, and salsa fresca.",
        is_vegetarian: true, 
        image: "https://beyond-meat-production.s3.us-west-2.amazonaws.com/e2230d2f-b685-4325-b3e3-5402fe74b241.jpeg"
    }
   
]

# {
#     name: "",
#     cuisine: "",
#     description: "",
#     is_vegetarian: true, 
#     image: ""
# }

showcase_recipes.map{|attrs| Recipe.create(attrs)}

recipe_images = [
"https://www.eatwell101.com/wp-content/uploads/2020/09/Parmesan-Roasted-Brussels-Sprouts-1.jpg",
"https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg",
"https://assets.epicurious.com/photos/5892014d69bb8db572652044/master/pass/chocolate-whoopie-pies-020117.jpg",
"https://images.themodernproper.com/billowy-turkey/production/posts/2019/Asian-Chop-Salad-11.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599768360&s=33d79f2492c0cac39b969ef2d69f4e62",
"https://homegrownhappiness.co.nz/wp-content/uploads/2021/03/French-pastry-sourdough-735x1006.jpg",
"https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/3/4/0/CC_campus-eats-greek-devil-gyro-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1362429371185.jpeg",
"https://content.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15684/ramenbowls.jpg?v=1&mode=crop&width=800&height=640&upscale=false",
"https://static01.nyt.com/images/2014/01/23/dining/recipes-mixedsausagepaella/recipes-mixedsausagepaella-articleLarge.jpg",
"https://blog.williams-sonoma.com/wp-content/uploads/2020/02/stack-pancakes-blog-post-1000px-680x680.jpg",
"https://thestayathomechef.com/wp-content/uploads/2020/03/Pasta-Carbonara-2-3-scaled.jpg",
"https://infatuation.s3.amazonaws.com/media/images/guides/the-best-sushi-restaurants-in-seattle/kasinger_seattle_kashiba041.jpg",
"https://www.bestfranceforever.com/wp-content/uploads/2018/01/1170x658_ratatouille.jpg",
"https://theloopywhisk.com/wp-content/uploads/2018/11/Vegan-Chocolate-Truffle-Cake_730px-featured-500x500.jpg",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimply-delicious-food.com%2Feasy-shrimp-aglio-e-olio%2F&psig=AOvVaw3fjE9yu0Tg8J00LtpMD-Jj&ust=1630121193388000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDRsuig0PICFQAAAAAdAAAAABAD",
"https://food-images.files.bbci.co.uk/food/recipes/rich_beef_and_mushroom_62012_16x9.jpg",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200612-fruit-tart-0001-landscape-ag-1592424815.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*",
"https://food-images.files.bbci.co.uk/food/recipes/classic_sourdough_21029_16x9.jpg"
]

recipe_images.each do |image|
    Recipe.create(
        name: Faker::Food.dish,
        cuisine: Faker::Food.ethnic_category,
        description: Faker::Food.description,
        is_vegetarian: rand(2) == 1,
        image: image
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
    "garlic",
    "filet mignon steak",
    "pepper",
    "chicken stock",
    "ahi tuna",
    "mahi mahi",
    "radish",
    "green onions",
    "rice",
    "sesame seeds",
    "avocado",
    "beyond meat patty",
    "cilantro",
    "tortillas",
    "cabbage",
    "lime"
]

ingredients.map{|name| Ingredient.create(name: name)}

30.times do 
    new_ingredient = Faker::Food.ingredient.downcase
        if !Ingredient.pluck(:name).include?(new_ingredient)
        Ingredient.create(
            name: Faker::Food.ingredient.downcase
        )
    end
end

#seed recipe_ingredients

Recipe.first.add_ingredients([3,10,12,14,1])
Recipe.find(2).add_ingredients([2,7,8,14,15,17,19])
Recipe.find(3).add_ingredients([1,5,10,11,13,14])
Recipe.find(4).add_ingredients([9,10,14,15,16,17,18,19])
Recipe.find(5).add_ingredients([21,22,23,24,25,26,27])
Recipe.find(6).add_ingredients([23,27,28,29,30,31,32])


Recipe.all.slice(6..-1).each do |r|
    r.add_ingredients([1,14,10])
end


#seed user_recipe_ingredients


puts "✅  Done seeding! ✅ "
