const getRecipe = async () => {
    const response = await fetch('http://localhost:3001/recipes', {
        method: 'GET'
    });
    return response.json();
};

export default {
    getRecipe
}