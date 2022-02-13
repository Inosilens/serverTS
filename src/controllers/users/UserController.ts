import {Request, Response} from "express";
import {Models} from "../../models";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

interface IUser {
    email: string,
    password: string,
    role: string
    id: number
}

const generateJwt = (id: number, email: string, role: string) => {
    return jwt.sign(
        {id, email, role},
        String(process.env.SECRET_KEY),
        {expiresIn: '24h'}
    )
}


class UserController {
    async registration(req: Request, res: Response) {
        const {email, password, role}: IUser = req.body
        if (!email || !password) {
            return res.send({error: 'Neveryn zaprot'})
        }
        const candidate = await Models.Users.findOne({where: {email}})
        if (candidate) {
            return res.send({error: 'пользователь уже существует'})
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Models.Users.create({email, password: hashPassword, role})
        console.log(user.getDataValue('id',))
        const token = generateJwt(user.getDataValue('id'), user.getDataValue('email'), user.getDataValue('role'))
        return res.json({token})
    }

    async login(req: Request, res: Response) {
        const {email, password}: IUser = req.body
        if (!email || !password) {
            return res.send({error: 'Neveryn zaprot'})
        }
        const user = await Models.Users.findOne({where: {email: email}})
        if (user) {
            let comparePassword = bcrypt.compareSync(password, user.getDataValue('password'))
            if (!comparePassword) {
                return res.send({message: "неверный пароль"})
            } else {
                const token = generateJwt(user.getDataValue('id'), user.getDataValue('email'), user.getDataValue('role'))
                return res.json({token})
            }
        } else {
            res.status(403).send({message: 'neudacha'})
        }

    }
}

export default new UserController()