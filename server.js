const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1618;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Handle other routes or middleware as needed

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

