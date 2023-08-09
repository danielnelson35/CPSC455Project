const apiURL = process.env.REACT_APP_APIURL || "";

const getRecipe = async () => {
    const response = await fetch(`${apiURL}/recipes/`, {
        method: 'GET'
    });
    return response.json();
};

const getFilteredRecipe = async (ingredients, restrictions) => {
    let ingredientsString = ingredients.join(",");
    let uri = `${apiURL}/recipes/filter?`
    let params = new URLSearchParams({
        ingredients: ingredientsString,
        restrictions: restrictions
    })
    const response = await fetch(uri + params, { 
        method: "GET" 
    });
    return response.json().then((res) => {
        if (!response.ok) {
            throw res;
        }

        return res;
    });
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

const getRestrictions = async (input) => {
    let uri = `${apiURL}/recipes/restrictions`
    const response = await fetch(uri, {
        method: 'GET'
    });
    return response.json();
}

export default {
    getRecipe,
    getSuggestions: getSuggestions,
    getFilteredRecipe,
    getRestrictions
}
