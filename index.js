const express = require('express');
const path = require('path');

const app = express();

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 3000
app.listen(300, () => {
  console.log('Server is running on http://localhost:300');
});

