// Import the express module
const express = require('express');

// Initialize the express application
const app = express();
const PORT = 3000;

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello World! Your backend is running.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`hello from ${id}`);
});
