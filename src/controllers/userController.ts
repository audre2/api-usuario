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
        .get((req: Request, res: Response) => {
            this.userService.getAllUsers(req, res);
        })
        //Criar um novo usuário
        .post((req: Request, res: Response) => {
            this.userService.insertUser(req, res);
        })
        //Atualiza o usuário
        .put(async (req: Request, res: Response) => {
            this.userService.updateUser(req, res);   
        })
        //Consultar um usuário
        app.route('/users/:cpf')
        .get(async (req: Request, res: Response) => {            
            this.userService.getUser(req, res);    
        })
        //Deleta um usuário
        .delete(async (req: Request, res: Response) => {   
            this.userService.deleteUser(req, res);      
        })

    }
}

