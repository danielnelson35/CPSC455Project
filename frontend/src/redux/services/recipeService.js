require('dotenv').config();
const apiURL = process.env.REACT_APP_APIURL || "";

const getRecipe = async () => {
    const response = await fetch(`${apiURL}/recipes/`, {
        method: 'GET'
    });
    return response.json();
};

export default {
    getRecipe
}