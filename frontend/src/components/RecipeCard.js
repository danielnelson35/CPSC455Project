import { useSelector } from "react-redux";
import { REQUEST_STATE } from "redux/utils";


// props can have: title, image, description
export default function RecipeCard() {
    const recipeStore = useSelector(state => state.recipeStore);
    const recipe = recipeStore.recipe;
    if (!recipe || !recipe.title) {
        return (
            <></>
        )
    }

    console.log(recipeStore.getRecipe);

    if (recipeStore.getRecipe === REQUEST_STATE.FULFILLED) {
        return (
            <div className="RecipeCard">
                <h2> {recipe.title} </h2>
                <div className="imageBox">
                    <img src={recipe.image} alt="Recipe" />
                </div>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                    {recipe.ingredients.length > 0 && recipe.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                    </ul>
                </div>
                <div className="instructions">
                    <h3>Directions</h3>
                    <div className="steps" style={{ whiteSpace: 'pre-wrap'}}>
                        {recipe.directions}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="spinner">
                <iframe src="https://giphy.com/embed/KG4PMQ0jyimywxNt8i" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        )
    }
}
