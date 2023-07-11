import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeAsync } from "redux/thunks/recipeThunks";

const GenerateButton = () => {

  const dispatch = useDispatch();

  const handleCLick = (e) => {
    e.preventDefault();
    dispatch(getRecipeAsync());
  }

  return (
    <button id="generatebutton" className="homepageButton" onClick={handleCLick}>Generate Recipe</button>
  )
}

export default GenerateButton;