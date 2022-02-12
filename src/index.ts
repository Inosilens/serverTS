import dotenv from "dotenv";
import  express from "express";
import sequalize from './db.js'
import path from 'path'
dotenv.config()


let env = process.env.DB_HOST;



let app = express()
const PORT = process.env.DB_PORT || 8000

app.get('/users', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});




