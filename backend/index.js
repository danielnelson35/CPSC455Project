require('dotenv').config();

// Server setup
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

setupMiddleware();
setupRoutes();

// Middleware
function setupMiddleware() {
    const cors = require('cors');

    app.use(express.json());
    app.use(cors());
}

// Routes
function setupRoutes() {
    const indexRouter = require('./routes/index');
    const recipeRouter = require('./routes/recipes');
    const userRouter = require('./routes/user');

    app.use('/', indexRouter);
    app.use('/recipes', recipeRouter);
    app.use('/user', userRouter)
}