const express = require('express');
const app = express();
const port = 3000;
const dotenv = require("dotenv")
dotenv.config();
const User_route = require('./routes/appRoutes')
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port);
  console.log("Mongodb sucessful and app is listening on port " + port);
})
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.use(express.static('public')); 








app.use('/', User_route)