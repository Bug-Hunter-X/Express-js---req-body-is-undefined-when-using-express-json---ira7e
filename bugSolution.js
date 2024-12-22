const express = require('express');
const app = express();
app.use(express.json()); // Ensure this is BEFORE the route handler
app.post('/data', (req, res) => {
  console.log(req.body); // req.body should now contain the JSON data
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});