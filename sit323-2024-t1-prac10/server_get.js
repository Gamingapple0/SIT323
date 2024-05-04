const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint for addition operation
app.get('/add', (req, res) => {
    // Parse input parameters as floating-point numbers
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if either parameter is not a number
    if (isNaN(num1) || isNaN(num2)) {
        // Respond with an error message if parameters are invalid
        res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    } else {
        // Perform addition operation and send the result as JSON
        const result = num1 + num2;
        res.json({ result });
    }
});

// Endpoint for subtraction operation
app.get('/subtract', (req, res) => {
    // Parse input parameters as floating-point numbers
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if either parameter is not a number
    if (isNaN(num1) || isNaN(num2)) {
        // Respond with an error message if parameters are invalid
        res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    } else {
        // Perform subtraction operation and send the result as JSON
        const result = num1 - num2;
        res.json({ result });
    }
});

// Endpoint for multiplication operation
app.get('/multiply', (req, res) => {
    // Parse input parameters as floating-point numbers
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if either parameter is not a number
    if (isNaN(num1) || isNaN(num2)) {
        // Respond with an error message if parameters are invalid
        res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    } else {
        // Perform multiplication operation and send the result as JSON
        const result = num1 * num2;
        res.json({ result });
    }
});

// Endpoint for division operation
app.get('/divide', (req, res) => {
    // Parse input parameters as floating-point numbers
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if either parameter is not a number or if divisor is zero
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        // Respond with an error message if parameters are invalid
        res.status(400).json({ error: 'Invalid parameters. Please provide valid non-zero numbers.' });
    } else {
        // Perform division operation and send the result as JSON
        const result = num1 / num2;
        res.json({ result });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
