function errorHandler(err, req, res, next) {
    console.error(err); 
    if (err.name === 'UnauthorizedError') {
        
        return res.status(401).json({message: "The user is not authorized"})
    }

    if (err.name === 'ValidationError') {
        
        return res.status(401).json({message: err})
    }

    
    return res.status(500).json({ message: "Internal server error", details: err.message });
}

module.exports = errorHandler;