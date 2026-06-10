const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const DATA_FILE = path.join(__dirname, 'data.json');

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.post('/api/users', (req, res) => {
    try {
        const newUser = req.body;
        const existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        newUser.id = Date.now();
        existingData.push(newUser);
        fs.writeFileSync(DATA_FILE, JSON.stringify(existingData, null, 2));
        res.status(201).json({ message: 'User saved successfully!', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save user' });
    }
});

app.get('/api/users', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});