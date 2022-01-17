const mongodb = require('mongodb');
const Mongoclient = mongodb.MongoClient;
let db;
class connection{
    constructor() { };

    DBconnection = (callback) => {
        Mongoclient.connect("mongodb+srv://ananya:PVtCRAz5ylarSuhd@cluster0.shzdx.mongodb.net/students?retryWrites=true&w=majority")
        .then(client => {
            console.log('Database connected');
            db = client.db();
            // console.log(db)
            callback();
        })
        .catch(err => {
            console.log("Error in database connection",err);
        })
    }
    getdb = () => {
        if(db){
            return db;
        }
        else{
            throw 'No database found';
        }
    }
    
}

module.exports = connection



