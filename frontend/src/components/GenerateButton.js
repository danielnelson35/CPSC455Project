import { useSelector, useDispatch } from "react-redux";
import { getRecipeAsync, getFilteredRecipeAsync } from "redux/thunks/recipeThunks";

const GenerateButton = () => {

  const recipeStore = useSelector(state => state.recipeStore);


  const ingredientsList = recipeStore.ingredientsList;
  const restrictionsList = recipeStore.restrictionsList;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    if (ingredientsList.length !== 0 || restrictionsList.length !== 0) {
      dispatch(getFilteredRecipeAsync([ingredientsList, restrictionsList]));
    } else {
      dispatch(getRecipeAsync());
    }
  }

  return (
    <div className="buttonBox">
      <button id="generatebutton" className="generateRecipeButton" onClick={handleClick}>Generate Recipe</button>
    </div>
  )
}

export default GenerateButton;