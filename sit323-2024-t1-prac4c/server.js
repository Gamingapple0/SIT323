const express = require('express');
const app = express();
const PORT = 3000;

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    } else {
        const result = num1 + num2;
        res.json({ result });
    }
});

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    } else {
        const result = num1 - num2;
        res.json({ result });
    }
});

app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    } else {
        const result = num1 * num2;
        res.json({ result });
    }
});

app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        res.status(400).json({ error: 'Invalid parameters. Please provide valid non-zero numbers.' });
    } else {
        const result = num1 / num2;
        res.json({ result });
    }
});

app.get('/modulo', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters. Please provide non-zero valid numbers.' });
    } else {
        const result = num1 % num2;
        res.json({ result });
    }
});

app.get('/exponentiation', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters. Please provide non-zero valid numbers.' });
    } else {
        const result = num1 ** num2;
        res.json({ result });
    }
});


app.get('/sqroot', (req, res) => {
    const num1 = parseFloat(req.query.num1);

    if (isNaN(num1)) {
        res.status(400).json({ error: 'Invalid parameters. Please provide valid non-zero number.' });
    } else {
        const result = Math.sqrt(num1);
        res.json({ result });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
