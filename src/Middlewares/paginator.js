const studentService =  require('../Services/studentServices');
const studentServiceObj = new studentService();

class PaginatorMiddleware{
    constructor () {}

    pagination = async(req, res, next) => {
        const contents = {};
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const students = []
        try{
            const students = await studentServiceObj.getStudents(limit, (page-1)*limit);
            const length = await studentServiceObj.getStudentsLength();
        
            const startIndex = (page-1) * limit;
            const endIndex = page * limit;
            if(startIndex > 0) {
                contents.previous = { page : page - 1, limit : limit}
            }
            if (endIndex < length){
                contents.next = { page : page + 1, limit : limit }
            }
            contents.results = students
            res.results = contents
            next()
        }
        catch(err){
            next(err)

        }
       
    }
}

module.exports = PaginatorMiddleware