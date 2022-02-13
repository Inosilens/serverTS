import {Request, Response} from "express";
import {Models} from "../../models";


interface IUser {
    email: string,
    password: string
}


class UserController {
    async registration(req: Request, res: Response) {
        const {email, password}: IUser = req.body
        if (!email || !password) {
            return res.send({error: 'Neveryn zaprot'})
        }
        const user = await Models.Users.create({email,password})
        res.send(user)
    }

    async login(req: Request, res: Response) {

    }
}

export default new UserController()