const studentService =  require('../Services/studentServices');
const studentServiceObj = new studentService();

class studentController{
    constructor() {}

    postStudent = async(req, res, next) => {
        try{
            await studentServiceObj.postStudent(req.body.name, req.body.email);
            res.send({
                message : "Added a student successfully"
            })
        }
        catch(err){
            next(err)
        }
       
        
    };
    getStudents = async(req, res,next) => {
        res.send({
            message:"Fetching all users",
            body : res.results
        })

    };
    updateStudent = async(req, res, next) => {
        try{
            
            await studentServiceObj.updateStudent(req.params.id, req.body)
            res.send({
                message : "Updated one user successfully!"
                
            })
        }
        catch(err){
            next(err)
        };
    };

}

module.exports = studentController;
