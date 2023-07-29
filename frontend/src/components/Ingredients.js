import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSuggestions, addIngredient, removeIngredient } from "redux/reducers/recipeReducer";
import { getSuggestionsAsync } from "redux/thunks/recipeThunks";

const Ingredients = () => {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.recipeStore.suggestions);
    const ingredients = useSelector(state => state.recipeStore.ingredientsList);

    const onChangeHandler = (e) => {
        setUserInput(e.target.value);
        dispatch(getSuggestionsAsync(e.target.value));
    }

    const onSuggestionHandler = (ingredient) => {
        setUserInput(ingredient);
        dispatch(clearSuggestions());
    }

    const handleSubmit = (input) => {
        dispatch(addIngredient(input));
        setUserInput("");
    }

    const handleRemove = (ingredient) => {
        dispatch(removeIngredient(ingredient));
    }

    return (
        <div className="ingredientsdiv">
            <label htmlFor="ingredients">Ingredients:</label>
            <input type="text"
                name="ingredients"
                id="ingredients"
                onChange={onChangeHandler}
                value={userInput}
                // onBlur={() => {
                //     setTimeout(() => {
                //         dispatch(clearSuggestions());
                //     }, 100);
                // }}
            />
            <input className="addButton" type="submit" value="Add" onClick={() => handleSubmit(userInput)} />
            <div className="ingredientslist">
                <ul>
                    {ingredients && ingredients.map((ingredient, i) => (
                        <div className={ingredient} key={i}>
                            <li key={i}>{ingredient}</li>
                            <input className="addButton" type="button" value="x" onClick={() => handleRemove(ingredient)} />
                        </div>
                    ))}
                </ul>
            </div>
            <div> </div>
            <div className="dropdown">
                <ul>
                    {suggestions && suggestions.map((suggestion, i) => (
                        <li key={i} onClick={() => onSuggestionHandler(suggestion.name)}>{suggestion.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Ingredients;