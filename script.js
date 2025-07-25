const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
    const { email, passwórd } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(passwórd, 10);

    // Here you would typically store the email and hashed password in a database
    console.log('Email:', email);
    console.log('Hashed Password:', hashedPassword);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});