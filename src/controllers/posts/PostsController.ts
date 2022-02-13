import {Request, Response} from "express";
import {Models} from "../../models";
import path from 'path'
import * as uuid from 'uuid'


interface IPost {
    body: string,
    tittle: string,
    userId: number
}


class PostsController {
    async createPost(req: Request, res: Response) {
        let fileName
        let {body, tittle, userId}: IPost = req.body
        if (!body || !tittle || !userId) {
            return res.send({error: 'Неверные параметры'})
        }
        if(req.files){
            const {img} = req.files
            fileName = uuid.v4()+".jpg"
            if ("mv" in img) {
                await img.mv(path.resolve(__dirname, './../../static', fileName))
            }
        }
        const post = await Models.Posts.create({body, tittle, userId , image : fileName})
        return res.json(post)
    }

    async getAllPosts(req: Request, res: Response) {
        const posts = await Models.Posts.findAndCountAll()
        return res.json(posts)
    }

    async getPostWithId(req: Request, res: Response) {
        const {userId} = req.params
        const post = await Models.Posts.findAll({where: {userId: userId}})
        return res.json(post)
    }


}

export default new PostsController()