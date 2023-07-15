import { useSelector } from "react-redux";

// props can have: title, image, description
export default function RecipeCard() {
    const recipe = useSelector(state => state.recipeStore.recipe);
    if (!recipe) {
        return (
            <></>
        )
    }
    return (
        <div className="RecipeCard">
            <h2> {recipe.title} </h2>
            <img src={recipe.image} alt="Recipe" />
            <div className="ingredients">
                <h3>Ingredients</h3>
                {recipe.ingredients.length > 0 && recipe.ingredients.map((ingredient) => (
                    <div key={ingredient}>{ingredient}</div>
                ))}
            </div>
            <div className="instructions">
                <h3>Directions</h3>
                <div className="steps"> {recipe.directions} </div>
            </div>
        </div>
    )
}