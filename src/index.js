const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const studentRoutes = require('./Routes/studentRoutes');
const Error = require('./Error/error')
const connection = require('./Connection/connection')

const connectionObj = new connection();
const errorObj = new Error()

const PORT = 3000


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/students', studentRoutes);
app.use(errorObj.error)

connectionObj.DBconnection( () => {
    app.listen(PORT), (err) => {
        console.log(`Error while serving the app at port : ${PORT}`)
    }
} );