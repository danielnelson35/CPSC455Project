const apiURL = process.env.REACT_APP_APIURL || "";

const getRecipe = async () => {
    const response = await fetch(`${apiURL}/recipes/`, {
        method: 'GET'
    });
    return response.json();
};

const getFilteredRecipe = async (ingredients) => {
    let ingredientsString = ingredients.join(",");
    let uri = `${apiURL}/recipes/filter?`
    let params = new URLSearchParams({
        ingredients: ingredientsString
    })
    const response = await fetch(uri + params, { 
        method: "GET" 
    });
    return response.json();
}

const getSuggestions = async (input) => {
    let uri = `${apiURL}/recipes/ingredients?`
    let params = new URLSearchParams({
        query: input
    });
    const response = await fetch(uri + params, {
        method: 'GET'
    });
    return response.json();
}

export default {
    getRecipe,
    getSuggestions: getSuggestions,
    getFilteredRecipe
}
