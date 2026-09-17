import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.end("<h1>Hello Express</h1>");
});
app.get("/about", (req, res) => {
    res.end("<h1>WE are FSD Developer</h1>");
});


app.post("/login",(req, res) => {
  res.send({msg: 'user login'});
});
app.put("/user/update/1",(req, res) => {
  res.send({msg: "user updated"});
});
app.delete("/user/1",(req, res) => {
  res.send({msg: "REMOVE USER 1"});
});
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});



app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
 