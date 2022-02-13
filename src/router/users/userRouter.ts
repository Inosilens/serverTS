import UserController from "../../controllers/users/UserController";
import {Router} from "express";


const userRouter = Router()

userRouter.post('/registration', UserController.registration)
userRouter.post('/login', UserController.login)

export default userRouter