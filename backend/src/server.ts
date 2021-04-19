import express from 'express';
import path from 'path'
import 'reflect-metadata';
import './database';
import { userRouter } from './routes/userRoutes';

const app = express();
const port = 8888;
app.use(express.json());
app.use(userRouter);
app.use('/uploads', express.static(path.join(__dirname, "..","uploads")))
app.listen(port, () => {
    console.log('Server is Running');
})