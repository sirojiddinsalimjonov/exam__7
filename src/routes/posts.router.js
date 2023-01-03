import { Router } from "express";
import { POST } from "../middleware/post.middelware.js";
import { DOWNLOADIMG_IMG, GET_IMAGES, GET_INNER_POSTS, GETPOST, NEW_ANNOUNCEMENT } from "../controllers/posts.controller.js";


let posts = Router()

posts.post("/post" , POST , NEW_ANNOUNCEMENT)

posts.get("/getposts" , GETPOST)

posts.get("/getpost/:postId" , GET_INNER_POSTS)

posts.get('/getImg/:imgName' , GET_IMAGES)

posts.get('/download/:imgName' , DOWNLOADIMG_IMG)

export default posts