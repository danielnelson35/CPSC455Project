import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestrictionsAsync } from "redux/thunks/recipeThunks";
import { addRestriction, removeRestriction } from "redux/reducers/recipeReducer";

const Allergies = () => {
    const dispatch = useDispatch();
    const [selectedAllergy, setSelectedAllergy] = useState("");
    const allergies = useSelector(state => state.recipeStore.restrictionsList);
    useEffect(() => {
        dispatch(getRestrictionsAsync())
    }, [])

    const updateSelected = (e) => {
        setSelectedAllergy(e.target.value);
    }

    const handleAddAllergy = () => {
        dispatch(addRestriction(selectedAllergy));
    }

    const handleRemoveAllergy = (allergy) => {
        dispatch(removeRestriction(allergy));
    }

    const allergyList = useSelector(state => state.recipeStore.restrictions)
    return (
        <div className="allergiesdiv">
            <div className="allergiesform">
                <label htmlFor="allergies">Allergies:</label>
                <select name="allergies" id="allergies" onChange={updateSelected}>
                    {allergyList.length > 0 && allergyList.map((allergy) => (
                        <option key={allergy} value={allergy}>{allergy}</option>
                    ))}
                </select>
                <input className="addButton" type="submit" value="Add" onClick={() => handleAddAllergy()} />
            </div>
            <div className="allergieslist">
                <ul>
                    {allergies && allergies.map((allergy, i) => (
                        <div className={allergy} key={i}>
                            <li key={i}>{allergy}</li>
                            <input className="addButton" type="button" value="X" onClick={() => handleRemoveAllergy(allergy)} />
                        </div>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Allergies;