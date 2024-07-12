const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statik dosyalara hizmet et
app.use(express.static(path.join(__dirname, 'bundles')));

// GET request endpoint
app.get('/greet', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    if (!firstName || !lastName) {
        return res.status(400).json({ error: 'Both firstName and lastName parameters are required' });
    }

    res.json({
        firstName: firstName,
        lastName: lastName
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
