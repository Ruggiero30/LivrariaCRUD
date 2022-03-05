
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require("cors");


const app = express();


app.use(express.json())
app.use(cors());
app.use("/books", router)


const DB_URL = "mongodb+srv://maetia:locapo@cluster0.ntevp.mongodb.net/bookloja?retryWrites=true&w=majority";
mongoose.connect(DB_URL)
.then(() => console.log("Connected to database"))
.then(() => {app.listen(5000)}).catch((err) => {console.log(err)});