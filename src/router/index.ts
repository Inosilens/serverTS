import * as express from "express";
import userRouter from "./users/userRouter";



const rootRouter = express.Router()

rootRouter.use('/users', userRouter)



export default rootRouter