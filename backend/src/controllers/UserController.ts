import {Request,Response} from 'express'
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { UserView } from '../views/UserView';
import fs from "fs-extra";
import path from 'path';


const userView = new UserView;

class UserController{
    async create(req: Request, res: Response){
        const {
            name,
            birthDate
        } = req.body;
        if(!name){
            res.status(400).json({message: "Insira um nome de usuário"})
        }
        if(!birthDate){
            res.status(400).json({message: "Insira uma data de nascimento"})
        }
        const userRepository = getRepository(User);

        const image = req.file.filename;
        
        const data = {
            name,
            birthDate,
            image
        }

        const user = userRepository.create(data);
        await userRepository.save(user);

        return res.status(201).json({message: "Usuário Cadastrado com Sucesso"})
    }
    async index(req: Request, res: Response){
        const userRepository = getRepository(User);

        const users = await userRepository.find();

        return res.status(200).json(userView.renderMany(users));
    }
    async show(req:Request, res: Response){
        const {id} = req.params;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        if(!user){
            return res.status(200).json({message: "Usuário não encontrado"})
        }
        return res.status(200).json(userView.render(user));
    }
    async delete(req: Request,res: Response){
        const {id} = req.params;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        const userImage = user?.image as string

        await fs.unlink(path.join(__dirname,"..","..","uploads",userImage));

        await userRepository.delete(id);

        return res.json({message: "Usuário deletado com sucesso"})

    }
    async update(req: Request, res: Response){
        const {id} = req.params;

        const {
            name,
            birthDate,
        } = req.body
        const image = req.file.filename;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        const userImage = user?.image as string

       await fs.unlink(path.join(__dirname,"..","..","uploads",userImage));

       await userRepository.update({id}, {name,birthDate,image});

       return res.status(200).json({message: "Usuário atualizado"})


    }
}

export {UserController};
