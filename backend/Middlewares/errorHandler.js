const errorHandler = (err, req, res, next) => {
    console.error(err);

    // Handle specific errors
    if (err instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({
            success: false,
            error: 'Validation Error',
            details: err.errors
        });
    }

    // Handle other types of errors
    res.status(500).json({
        success: false,
        error: 'Internal Server Error'
    });
};

module.exports = errorHandler;
