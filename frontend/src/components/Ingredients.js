
const Ingredients = () => {
    return (
        <div className="ingredientsdiv">
            <label for="ingredients">Ingredients:</label>
            <select name="ingredients" id="ingredients">
                <option value="ingredient1">ingredient1</option>
                <option value="ingredient2">ingredient2</option>
            </select>
        </div>
    )
}

export default Ingredients;