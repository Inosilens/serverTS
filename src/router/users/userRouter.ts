import * as express from "express";
import UserController from "../../controllers/users/UserController";


const userRouter = express.Router()

userRouter.post('/registration', UserController.registration)

export default userRouter