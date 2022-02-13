import {Router} from "express";
import userRouter from "./users/userRouter";
import postRouter from "./posts/postRouter";



const rootRouter = Router()

rootRouter.use('/users', userRouter)
rootRouter.use('/posts',postRouter)



export default rootRouter