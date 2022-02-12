import dotenv from "dotenv";
dotenv.config()
import express, {json} from "express";
import {sequelize} from "./db";
import Models from './models/index'

let app = express()
app.use(json())

console.log(Models[1])


const PORT = process.env.PORT || 8000

app.get('/users', (req, res) => {
    res.send({message:'you are best'});
});

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>{
            console.log(`server start at : ${PORT}`)
        })
    }
    catch (e) {
        console.log(e)
    }
}

start()

