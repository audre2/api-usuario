import {Request, Response} from "express";
import { UserSchema } from '../models/userModel';
import * as mongoose from 'mongoose';
import { UserService } from "./../services/userService";

const User = mongoose.model('User', UserSchema);

export class UserController {      

    private userService: UserService = new UserService(); 
    
    public routes(app): void {   
        
        app.route('/users')
        //Buscar todos os usuários
        .get(async (req: Request, res: Response) => {
            console.log("GET todos os usuários"); 
            try {
                const users = await this.userService.getAllUsers();;
    
                if (Object.keys(users).length === 0) {
                  res.status(404).send({ message: 'Não foi encontrado nenhum usuário'});
                } else {
                  res.send(users);
                }
            } catch (err) {
                res.status(500).send({ message: err.message });
            }
        })
        //Criar um novo usuário
        .post(async (req: Request, res: Response) => {
            console.log("POST usuário");
            try {
                await this.userService.insertUser(req);
                res.send({ message: 'Usuário cadastrado!'});
              } catch (err) {
                res.status(500).send({ message: err.message });
            }    
        })
        //Atualiza o usuário
        .put(async (req: Request, res: Response) => {
            console.log("PUT usuário");
            try {
                const user = await this.userService.updateUser(req);
                res.send(user);
            } catch (err) {
                res.status(500).send({ message: err.message });
            }  
        })
        //Consultar um usuário
        app.route('/users/:cpf')
        .get(async (req: Request, res: Response) => {  
            console.log("GET usuário");   
            try {
                const user = await this.userService.getUser(req);
                if (!user) {
                    res.status(404).send({ message: 'Usuário não encontrado'});
                } else {            
                    res.status(200).send(user);
                }
            } catch (err) {
                res.status(500).send({ message: err.message });
            }             
        })
        //Deleta um usuário
        .delete(async (req: Request, res: Response) => {
            console.log("GET usuário");   
            try {
                const user = await this.userService.deleteUser(req);
                if (!user) {
                    res.status(404).send({ message: 'Usuário não encontrado'});
                } else {            
                    res.status(200).send(user);
                }
            } catch (err) {
                res.status(500).send({ message: err.message });
            }     
        })
    }
}

