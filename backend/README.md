`'/users/favouriteRecipes/add'` - POST - Add favourite recipe to user - body should be the recipe in json. { username: "", recipe: {}, ... }

`'/users/favouriteRecipes/all/:username'` - GET - Get all favourite recipes for a user

`'/users/favouriteRecipes/random/:username'` - GET - Get random favourite recipe for a user

`'/users/favouriteRecipes/delete'` - DELETE - Delete favourite recipe from user - body needs username and recipe name in json:

 ```
 {
    username: "", 
    recipename: ""
}
 ```

`'/users/info/:username'` - GET - Get user info - username

`'/users/create'` - POST - Create user (Will be used internally for login, don't currently have a register) - body should be the user information

`'/users/update/'` - PATCH - Update user - body should have the username and the fields to be updated in the same json object 
```
{
    username: "", 
    field1: "", 
    field2: "", 
    ...
}
``````

`'/login/'` - POST - Login - should have the username of the user in the body `{ username: "" }` (Other fields can be added later as needed.)

`'/logout/'` - POST - Logout - Body does not require anything.

`'/recipes'` - GET - Gets a random recipe

`'/recipes/filter'` - GET - Gets a random recipe based on the filter provided. Pass in the filter query through parameters. Current supported parameters: ingredients (comma separated array)


`'/recipes/ingredients'` - GET - Returns the supported ingredients that are found with the query. Pass in the query through parameters: query (string)

`'/recipes/restrictions'` - GET - Returns the supported restrictions


