import dotenv from "dotenv";
import express from "express";
import {sequelize} from "./db";
import rootRouter from "./router";
import path from "path";
import fileUpload from "express-fileupload";


dotenv.config()
const PORT = process.env.PORT || 8000
let app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
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

