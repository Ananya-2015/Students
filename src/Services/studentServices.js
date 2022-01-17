
const { ObjectId } = require('mongodb');
const connection = require('../Connection/connection');
const getdbObj = new connection();

class studentServices{
    constructor(){};

    postStudent = async(name, email) => {
        const db = await getdbObj.getdb();
        const student = await db.collection('students').insertOne({name : name, email:email});
        // console.log(student)
        if (student){
            return student;
        }
        throw new Error('Could not add student');
    };
    getStudents = async() => {
        const db = await getdbObj.getdb();
        const students = await db.collection('students').find({}).toArray();

        if(students.length !== 0){
            return students;
        }
        throw new Error('Could not fetch all students');
    };
    updateStudent = async(id, query) => {
        const db = await getdbObj.getdb();
        const student = await db.collection('students').updateOne({_id : ObjectId(id)}, {$set:query});
        // console.log(student)
        if(student.matchedCount !== 0 && student.modifiedCount !==0){
            return student;
        }
        if(student.matchedCount === 0){
            throw new Error('Provided _id does not exist');
        }
        else{
            throw new Error('Could not update student');
        }

    };
}

module.exports = studentServices;