// middleware.ts
import convertUnixToUtc from "../utils/helperFunction.js";

/**
 * Middleware to convert UNIX timestamp to UTC and attach to the request object.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the stack.
 */
function convertTimestampToUtcMiddleware(req, res, next) {
    const unixTimestamp = req.body.timestamp; // Adjust according to your actual request structure
    const utcDateString = convertUnixToUtc(unixTimestamp);
    
    // Attach the converted timestamp to the request object
    req.utcTimestamp = utcDateString;

    next(); // Pass control to the next middleware function
}

export default convertTimestampToUtcMiddleware;
