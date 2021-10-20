const express = require("express");
const mongoose = require("mongoose");

const ejs = require("ejs");
const path = require("path");
const Blog = require("./models/Blog");

const app = express();

//Connect To Db
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const blogs = await Blog.find({})
  res.render("index",{
    blogs
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/addPost", (req, res) => {
  res.render("addPost");
});

app.post("/blogs", async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
