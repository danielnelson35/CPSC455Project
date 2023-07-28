const apiURL = process.env.REACT_APP_APIURL || "";

const login = async (user) => {
    const response = await fetch(`${apiURL}/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response.json();
};

const deleteRecipe = async (username, recipename) => {
    let body = {
        username: username,
        recipename: recipename
    }

    const response = await fetch(`${apiURL}/users/favouriteRecipes/delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return {
        recipename: recipename,
        response: await response.json()
    };
};

const getRecipes = async (username) => {
    const response = await fetch(`${apiURL}/users/favouriteRecipes/all/${username}/`, {
        method: 'GET'
    });
    return response.json();
};

const addToFavouriteRecipes = async (username, recipe) => {
    const user = {
        username: username,
        recipe: recipe
    }
    const response = await fetch(`${apiURL}/users/favouriteRecipes/add/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response.json().then((res) => {
        if (!response.ok) {
            throw res;
        }

        return res;
    });
};

export default {
    login,
    deleteRecipe,
    getRecipes,
    addToFavouriteRecipes
}