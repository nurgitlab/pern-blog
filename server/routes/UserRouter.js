import {Router} from "express";

const userRouter = new Router()

userRouter.post('/registration',)
userRouter.post('/login',)
userRouter.get('/auth', (req, res) => {
  res.json({message: "All Right!"})
})

export {userRouter}