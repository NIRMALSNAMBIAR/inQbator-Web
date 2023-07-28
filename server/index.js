const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const dotenv = require('dotenv');

const path = require("path");

const app = express();

dotenv.config({ path: './config.env' })
require("./config/db");

//api routes
const userRoutes = require("./routes/userRoutes");


const corsOptions = {
  origin: '*'
};

app.use(express.json()); //to accept json data
app.use(cors(corsOptions)); //for set cross origins 
app.use(cookieParser());
//-----------Routes------------/ 
 
app.use("/api", userRoutes);

// app.get

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`The server is running at localhost : ${port}`)
})

