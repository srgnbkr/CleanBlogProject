const express = require("express");
const ejs = require("ejs");

const app = express();

//Template engine
//Template Engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/addPost",(req,res) =>{
  res.render("addPost")
})

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
