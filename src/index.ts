import dotenv from "dotenv";
import express, {json} from "express";
import {sequelize} from "./db";
import rootRouter from "./router";

dotenv.config()
const PORT = process.env.PORT || 8000
let app = express()
app.use(express.json())
app.use('/api', rootRouter)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`server start at : ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

