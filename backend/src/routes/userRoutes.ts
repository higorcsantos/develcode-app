import {Router} from 'express';
import multer from 'multer';
import { UserController } from '../controllers/UserController';
import uploadConfig from '../config/upload';

const userRouter = Router();
const upload = multer(uploadConfig);

const userController = new UserController;

userRouter.post("/user",upload.single('image'),userController.create);
userRouter.get("/user",userController.index);
userRouter.get("/user/:id", userController.show);
userRouter.delete("/user/:id", userController.delete);
userRouter.put("/user/:id",upload.single('image'), userController.update);
export {userRouter};