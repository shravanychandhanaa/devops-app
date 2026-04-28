const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "Hello from Backend 🚀",
    env: process.env.APP_ENV || "not set"
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});