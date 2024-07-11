const express = require('express');
const app = express();
const port = 3000;

// GET request endpoint
app.get('/greet', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    if (!firstName || !lastName) {
        return res.status(400).send('Both firstName and lastName parameters are required');
    }

    res.send(`Hello, ${firstName} ${lastName}!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
