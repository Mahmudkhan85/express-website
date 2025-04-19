const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

// Form POST route
app.post('/contact', (req, res) => {
    const { name, message } = req.body;
    console.log('Form Data:', name, message);

    res.send(`<h2>Thank you, ${name}!</h2><p>Your message: "${message}" has been received.</p>`);
});

// 404 page
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
