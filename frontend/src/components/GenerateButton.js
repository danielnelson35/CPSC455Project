import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeAsync } from "redux/thunks/recipeThunks";

const GenerateButton = () => {

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getRecipeAsync());
  }

  return (
    <button id="generatebutton" className="generateRecipeButton" onClick={handleClick}>Generate Recipe</button>
  )
}

export default GenerateButton;