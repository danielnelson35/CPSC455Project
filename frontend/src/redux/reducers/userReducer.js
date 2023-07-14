import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: "",
    password: "onetwothree123",
    favouriteRecipes: [
        {
            title: "Banana Bread",
            image: "https://www.bowlofdelicious.com/wp-content/uploads/2019/08/Healthy-Banana-Bread-3.jpg",
            ingredients: [
                "2 to 3 medium bananas",
                "1/3 cup butter, melted",
                "1/2 teaspoon baking soda",
                "1 pinch salt",
                "3/4 cup sugar",
                "1 egg, beaten",
                "1 teaspoon vanilla",
                "1 1/2 cps flour"
            ],
            directions: "Preheat the oven to 350°F (175°C), and butter an 8 x 4-inch loaf pan. " +
                "In a mixing bowl, mash the ripe bananas with a fork until completely smooth. Stir the melted butter into the mashed bananas. " +
                "Mix in the baking soda and salt. Stir in the sugar, beaten egg, and vanilla extract. Mix in the flour. " +
                "Pour the batter into your prepared loaf pan. " +
                "Bake for 55 to 65 minutes at 350°F (175°C), or until a toothpick or wooden skewer inserted into the center comes out clean. A few dry crumbs are okay; streaks of wet batter are not. If the outside of the loaf is browned but the center is still wet, loosely tent the loaf with foil and continue baking until the loaf is fully baked. " +
                "Remove from oven and let cool in the pan for a few minutes. Then remove the banana bread from the pan and let cool completely before serving. Slice and serve.",
        },
        {
            title: "Chicken soup",
            image: "https://amindfullmom.com/wp-content/uploads/2016/09/Chicken-Soup.jpg",
            ingredients: [
                "1 tablespoon avocado oil or olive oil",
                "6 cloves of garlic, minced",
                "1 yellow onion, diced",
                "2 large carrots, thinly sliced",
                "2 celery stalks, roughly chopped",
                "1 tablespoon fresh grated ginger",
                "1 tablespoon fresh grated turmeric",
                "6 cups low sodium chicken broth",
                "1 pound boneless skinless chicken breast or thighs",
                "1 teaspoon freshly chopped rosemary",
                "1 teaspoon freshly chopped thyme, stems removed",
                "1/2 teaspoon salt",
                "Freshly ground black pepper",
                "1 cup pearl or Israeli couscous",
                "2/3 cup frozen peas (optional, but recommended)"
            ],
            directions: "Place a large dutch oven or pot over medium high heat and add in oil. Once oil is hot, add in garlic, onion, carrots and celery; cook for a few minutes until onion becomes translucent. " +
                "Next add in grated ginger and grated turmeric. Saute for 30 seconds to let the spices cook a bit, then add in chicken broth, chicken breast, rosemary, thyme, salt and pepper. " +
                "Bring soup to a boil, then stir in couscous. You’ll want the chicken to be covered by the broth so make sure you stir them down to the bottom. " +
                "Reduce heat to medium low and simmer uncovered for 20-25 minutes or until chicken is fully cooked. " +
                "Once chicken is cooked, remove with a slotted spoon and transfer to a cutting board to shred with two forks. Add chicken back to pot then stir in frozen peas. If you find that you don't have enough broth, feel free to add in another cup. Everyone likes their soup differently. Taste and adjust seasonings, if necessary. Enjoy."
        }
    ],
    userImageLink: "https://i.pinimg.com/564x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg"
}

const userStore = createSlice({
    name: 'user',
    initialState: {
        user: initialState
    },
    reducers: {
        setUsername: (state, action) => {
            state.user.username = action.payload
        },
        setUserImage: (state, action) => {
            state.user.userImageLink = action.payload
        },
        addRecipe: (state, action) => {
            state.user.favouriteRecipes.push(action.payload);
        }
    },
    extraReducers: (builder) => { } // For thunks
});

export const { setUsername, setUserImage, addRecipe } = userStore.actions
export default userStore;
