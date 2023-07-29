import { useSelector } from "react-redux";


// props can have: title, image, description
export default function RecipeCard() {
    const recipe = useSelector(state => state.recipeStore.recipe);
    if (!recipe || !recipe.title) {
        return (
            <></>
        )
    }

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
}
