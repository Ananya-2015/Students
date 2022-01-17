const studentService =  require('../Services/studentServices');
const studentServiceObj = new studentService();

class studentController{
    constructor() {};

    postStudent = async(req, res, next) => {
        try{
            // console.log(req.body.name)
            const student = await studentServiceObj.postStudent(req.body.name, req.body.email);
            res.send({
                message : "Added a student successfully",
                body : student
            })
        }
        catch(err){
            next(err)
        }
       
        
    };
    getStudents = async(req, res,next) => {
        try{
            const students = await studentServiceObj.getStudents()
            res.send({
                message:"Fetching all users",
                body : students
            })
        }
        catch(err){
            next(err)
        }

    };
    updateStudent = async(req, res, next) => {
        try{
            
            const student = await studentServiceObj.updateStudent(req.params.id, req.body)
            res.send({
                message : "Updated one user successfully!",
                body:student
            })
        }
        catch(err){
            next(err)
        }
    };

}

module.exports = studentController;
