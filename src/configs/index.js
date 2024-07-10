import dotenv from "dotenv";
dotenv.config();

const Configurations = {
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
    PORT: process.env.PORT,
    // JWT_SECRET: process.env.JWT_SECRET = 'FARMER',
    // cloud_name: process.env.CLOUDINARY_CLOUD_NAME= 'da49azful',
    // api_key: process.env.CLOUDINARY_API_KEY = 753652499695798,
    // api_secret: process.env.CLOUDINARY_API_SECRET = 'ur_k20_XlzwlVgyF2La7JPqT44U',
 
}


export default Configurations;