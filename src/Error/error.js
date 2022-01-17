class Error{
    constructor(){};

    error = (err, req, res, next) => {
        
        res.json({
            info : "From Error Middleware",
            message : err.message
        })
    }
}

module.exports = Error;