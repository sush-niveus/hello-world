// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Step 2: GET API with query param and path param
app.get('/api/info', (req, res) => {
  const queryParam = req.query.queryParam;
  const pathParam = req.params.pathParam;

  const response = {
    queryParam,
    pathParam,
    info: 'This is a GET request with query and path params.',
  };

  res.json(response);
});

// Step 3: POST API
app.post('/api/data', (req, res) => {
  const jsonData = req.body;

  // Assuming jsonData is an array
  const responseData = {
    data: jsonData,
    info: 'This is a POST request with JSON data.',
  };

  res.json(responseData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
