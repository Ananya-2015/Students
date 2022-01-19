const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const studentRoutes = require('./Routes/studentRoutes');
const Error = require('./Error/error')
const connection = require('./Connection/connection')

const connectionObj = new connection();
const errorObj = new Error()


// app.use(express.urlencoded({extended: true}))
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/students', studentRoutes);
app.use(errorObj.error)

connectionObj.DBconnection( () => {app.listen(3000)} );