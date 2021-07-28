const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index");
const url = "mongodb+srv://into:code@cluster0.wkgaf.mongodb.net/booksProject";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

async function start() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(3030, () => {
      console.log("Server has been started...");
    });
  } catch (e) {
    console.log(e.message);
  }
}

start();
