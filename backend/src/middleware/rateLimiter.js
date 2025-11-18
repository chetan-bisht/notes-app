import ratelimit from '../config/upstash.js';


const rateLimiter = async (req, res, next) => {

    try {
        const {success} = await ratelimit.limit(req.ip);// you can customize the key based on user IP or user ID

        if (!success) {
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        }
        next();
    } catch (error) {
        console.error('Rate limiting error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export default rateLimiter;