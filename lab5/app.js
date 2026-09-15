import express from 'express';

const app = express();

app.get("/about", (req, res) => {
    res.end("<h1>Hello Express</h1>")
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});