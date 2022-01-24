
const { ObjectId } = require('mongodb');
const connection = require('../Connection/connection');
const getdbObj = new connection();

class studentServices{
    constructor(){};

    getStudentsLength = async() => {
        const db = await getdbObj.getdb();
        const length =  await db.collection('students').find({}).count()
        return length
    }

    postStudent = async(name, email) => {
        const db = await getdbObj.getdb();
        const student = await db.collection('students').insertOne({name : name, email:email});
        // console.log(student)
        if (!student.insertedId){
            console.log(`Error in services/studentServices/postStudent`)
            throw new Error('Could not add student');
        }
        
    };
    getStudents = async(limit, skip) => {
        const db = await getdbObj.getdb();
        const students = await db.collection('students').find({},{projection : {_id : 0}}).skip(skip).limit(limit).toArray();
        console.log(students)
        if(students.length !== 0){
            return students;
        }
        else{
            console.log('Error in services/studentServices/getStudents')
            throw new Error('Could not fetch any students');

        }
        
        
    };
    updateStudent = async(id, query) => {
        const db = await getdbObj.getdb();
        const student = await db.collection('students').updateOne({_id : ObjectId(id)}, {$set:query});
        
        if(student.matchedCount === 0){
            console.log(`Error in services/studentServices/updateStudent`)
            throw new Error('Provided _id does not exist');
        }
        else if(student.matchedCount !== 0 && student.modifiedCount === 0){
            console.log(`Error in services/studentServices/updateStudent`)
            throw new Error('Could not update student');
        }

    };
}

module.exports = studentServices;