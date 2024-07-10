import dotenv from 'dotenv';
dotenv.config();
import express, { Router } from 'express';
import cors from "cors";
import connectDB from './src/db/db.js';
import router from './src/routes/index.js';
import swaggerUi from 'swagger-ui-express';
import swagger from './src/docs/swagger.json' assert {type:"json"}
// import cookieParser from 'cookie-parser';




const corsOptions ={
    allowedHeaders: ["Authorization", "Content-Type" ],
    methods: ["GET", "POST", "PUT", "UPDATE", "DELETE"],
    origin:"*",
};


const app = express();
app.use(express.json()); 
app.use(cors(corsOptions));
// app.use(bodyParser)
app.use(express.json());
// app.use(cookieParser());

app.use('/api/shop-app', router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));

const start = async () => {
    try {
        connectDB()
        app.listen(process.env.PORT, console.log(`server is listening on port ${process.env.PORT}`));
    } catch (error) {
       console.log(error)
    }
}
start();
