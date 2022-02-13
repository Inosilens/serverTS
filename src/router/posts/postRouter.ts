import {Router} from "express";
import PostsController from "../../controllers/posts/PostsController";


const postRouter = Router()

postRouter.post('/create', PostsController.createPost)
postRouter.get('/list', PostsController.getAllPosts)
postRouter.get('/:userId', PostsController.getPostWithId)


export default postRouter