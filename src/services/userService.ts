import { UserSchema } from '../models/userModel';
import * as mongoose from 'mongoose';
import {Request, Response} from "express";

const User = mongoose.model('User', UserSchema);

export class UserService {

    public async getAllUsers(req: Request, res: Response) {
        console.log("GET todos os usuários"); 
        try {
            const users = await User.find({});

            if (Object.keys(users).length === 0) {
              res.status(404).send({ message: 'Não foi encontrado nenhum usuário'});
            } else {
              res.send(users);
            }
          } catch (err) {
            res.status(500).send(err);
          }
    }

    public async insertUser(req: Request, res: Response) {
        console.log("POST usuário");
        const newUser = new User(req.body); 
        try {
            await newUser.save();
            res.send({ message: 'Usuário cadastrado!'});
          } catch (err) {
            res.status(500).send(err);
        }  
    }

    public async updateUser(req: Request, res: Response) {
        console.log("PUT usuário");
        const newUser = new User(req.body); 
        try {
            const user = await User.findOneAndUpdate(
              {cpf: req.body.cpf},
              req.body,
              { new: true }
            );
            res.send(user);
          } catch (err) {
            res.status(500).send(err);
          }  
    }

    public async getUser(req: Request, res: Response) {
        console.log("GET usuário"); 
        const newUser = new User(req.body); 
        try {
            const user = await User.findOne({cpf: req.params.cpf});
        
            if (!user) {
                res.status(404).send({ message: 'Usuário não encontrado'});
            } else {            
                res.status(200).send(user);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public async deleteUser(req: Request, res: Response) {
        console.log("DELETE usuário");
        const newUser = new User(req.body); 
        try {
            const user = await User.findOneAndDelete({cpf: req.params.cpf});
        
            if (!user) {
                res.status(404).send({ message: 'Usuário não encontrado'});
            } else {            
                res.status(200).send({ message: 'Usuário deletado com sucesso!'});
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }


}