import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeAsync, getFilteredRecipeAsync } from "redux/thunks/recipeThunks";

const GenerateButton = () => {

  const ingredientsList = useSelector(state => state.recipeStore.ingredientsList);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (ingredientsList.length !== 0) {
      console.log(ingredientsList);
      dispatch(getFilteredRecipeAsync([ingredientsList]));
    } else {
      dispatch(getRecipeAsync());
    }
  }

  return (
    <button id="generatebutton" className="generateRecipeButton" onClick={handleClick}>Generate Recipe</button>
  )
}

export default GenerateButton;