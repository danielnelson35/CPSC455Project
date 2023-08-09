import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavouriteRecipe } from "redux/thunks/userThunks";

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(0);
  const [directions, setDirections] = useState('');
  const user = useSelector(state => state.userStore.user);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addFavouriteRecipe([
      user.username,
      {
        title: title,
        image: image,
        ingredients: ingredients.map(ingredient => ingredient.value),
        directions: directions
      }
    ]));
    clearForm();
  };

  const handleIngredientChange = (ingredientID, e) => {
    var updatedIngredients = [...ingredients];
    for (var ingredient of updatedIngredients) {
      if (ingredient.id == ingredientID) {
        ingredient.value = e.target.value;
      }
    }
    setIngredients(updatedIngredients);
  };

  const addIngredients = () => {
    var newIngredientsID = count;
    setIngredients([...ingredients, { id: newIngredientsID, value: "" }]);
    setCount(count + 1);
  };

  const removeIngredients = (ingredientID) => {
    var removedIngredients = ingredients.filter((ingredient) => ingredient.id !== ingredientID);
    setIngredients(removedIngredients);
  };

  const clearForm = () => {
    setTitle('');
    setImage('');
    setIngredients([]);
    setCount(0);
    setDirections('');
  };

  return (
    <form>
      Recipe Name: <input className="form" type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      Image: <input className="form" type="text" value={image} onChange={(e) => setImage(e.target.value)} /><br />
      Ingredients:<br />
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <input
            className="form"
            type="text"
            value={ingredient.value}
            onChange={(e) => handleIngredientChange(ingredient.id, e)}
          />
          <input className="formButton" type="button" onClick={() => removeIngredients(ingredient.id)} value="Delete" />
        </div>
      ))}
      <input className="button" type="button" onClick={addIngredients} value="Add New Ingredient" /><br />
      Directions: <input className="form" type="text" value={directions} onChange={(e) => setDirections(e.target.value)} /><br />
      <div className="buttons">
        <input className="formButton" type="button" onClick={submitForm} value="Submit" />
        <input className="formButton" type="button" onClick={clearForm} value="Clear" />
      </div>
    </form>
  );
}

export default AddRecipeForm;