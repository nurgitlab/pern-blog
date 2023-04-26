import {Router} from "express";
import {postRouter} from "./PostRouter.js";
import {userRouter} from "./UserRouter.js";
import {categoryRouter} from "./CategoryRouter.js";

const router = new Router()

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/category', categoryRouter)


export {router}
