import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FIND_RECIPE } from "redux/actions/actions";

const GenerateButton = () => {

  const dispatch = useDispatch();

  const handleCLick = (e) => {
    e.preventDefault();
    dispatch(FIND_RECIPE(Math.floor(Math.random() * 3)));
  }

  return (
    <button id="generatebutton" className="homepageButton" onClick={handleCLick}>Generate Recipe</button>
  )
}

export default GenerateButton;