import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDb from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', async (req, res) => {
    res.send("Hello");
});

const startServer = async ()=> {

    try{
        connectDb(process.env.MONGODB_URL);
        app.listen(8080, ()=> {
        console.log('Server has started on port http://localhost:8080')
    }) 
    }catch(err){
        console.log(err);
    }
}

startServer();