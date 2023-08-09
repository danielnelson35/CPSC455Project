require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

setupMiddleware();
setupRoutes();


function setupMiddleware() {
    const cors = require('cors');

    app.use(express.json());
    app.use(cors());
}


function setupRoutes() {
    const indexRouter = require('./routes/index');
    const recipeRouter = require('./routes/recipes');
    const userRouter = require('./routes/user');

    app.use('/', indexRouter);
    app.use('/recipes', recipeRouter);
    app.use('/users', userRouter)
}