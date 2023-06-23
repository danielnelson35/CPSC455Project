import { useSelector } from "react-redux";

// props can have: title, image, description
export default function RecipeCard() {
    const recipe = useSelector(state => state.recipe);
    console.log('recipe', recipe);
    if (!recipe) {
        return (
            <></>
        )
    }
    return (
        <div className="RecipeCard">
            <h2> {recipe.title} </h2>
            <img src={recipe.image} alt="Recipe" />
            {recipe.ingredients.length > 0 && recipe.ingredients.map((ingredient) => (
                <div>{ingredient}</div>
            ))}
            <div> {recipe.directions} </div>
        </div>
    )
}