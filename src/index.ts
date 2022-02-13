import dotenv from "dotenv";
dotenv.config()
import express, {json} from "express";
import {sequelize} from "./db";
import {Models} from './models'
import rootRouter from "./router";

let app = express()
app.use(json())

console.log(Models.Users)


const PORT = process.env.PORT || 8000
app.use('/api',rootRouter)

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

