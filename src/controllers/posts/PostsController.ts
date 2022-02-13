import {Request, Response} from "express";
import {Models} from "../../models";


interface IPost {
    body: string,
    tittle: string,
    userId: number
}


class PostsController {
    async createPost(req: Request, res: Response) {
        const {body, tittle, userId}: IPost = req.body
        if (!body || !tittle || !userId) {
            return res.send({error: 'Neveryn zaprot'})
        }
        const post = await Models.Posts.create({body, tittle, userId})
        return res.json(post)
    }

    async getAllPosts(req: Request, res: Response) {
        const posts = await Models.Posts.findAndCountAll()
        return res.json(posts)
    }


}

export default new PostsController()