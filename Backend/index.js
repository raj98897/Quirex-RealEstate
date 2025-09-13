import express from 'express';
import {dbConnect} from './config/db.js';
import router from './route/userRoute.js';
import adminRoute from './route/adminRoute.js'
import queryRoute from './route/queryroute.js';
import fileUpload from 'express-fileupload';
import cors from 'cors'
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
dotenv.config({path:'./config/config.env'})



const __filename = fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

dotenv.config({path:path.resolve(__dirname,"./config/config.env")});

const app=express();
app.use(express.json());
app.use(fileUpload());

app.use(cors());
const PORT=9000; 
dbConnect();


app.use('/img',express.static('uploads'));
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
 app.use('/api',router);
 app.use('/api',adminRoute);
 app.use('/api',queryRoute);

// Serve static files
app.use(express.static(path.join(__dirname,'../Frontend/dist')));
app.get("*",(_,res)=>{
    res.sendFile(path.resolve(__dirname,'../Frontend/dist/index.html'))
}) 



app.listen(PORT,()=>{
    console.log(`Server running...${PORT}`); 
})
