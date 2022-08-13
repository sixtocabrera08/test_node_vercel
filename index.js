//import package
const express = require('express');
//const home = require('/routes/home');

//middlewares
const app = express();
app.use(express.json());

//routes
//app.use('/home', home);

//connection
const port = process.env.PORT || 9001;
app.listen(port);