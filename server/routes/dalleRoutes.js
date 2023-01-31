import express from 'express'
import * as dotenv from 'dotenv'
import {Configuration, OpenAIApi} from 'openai'


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res)=>{
    res.send("Hello from Dall E");
});

export default router;