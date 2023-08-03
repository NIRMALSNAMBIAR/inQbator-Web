const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
const path = require("path");

const app = express();

dotenv.config({ path: './config.env' })
require("./config/db");
const cloudinary = require('cloudinary').v2;
let cloud_name = process.env.CLOUD_NAME;
let api_key = process.env.API_KEY;
let api_secret = process.env.API_SECRET;
cloudinary.config({
  cloud_name, api_key, api_secret,
  secure: true
});
//api routes
const Routes = require("./routes");


const corsOptions = {
  origin: '*'
};

app.use(express.json()); //to accept json data
app.use(cors(corsOptions)); //for set cross origins 
app.use(cookieParser());
//-----------Routes------------/ 

app.use("/api", Routes);

// app.get

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`The server is running at localhost : ${port}`)
})

