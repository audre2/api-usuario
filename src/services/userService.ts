import { UserSchema } from '../models/userModel';
import * as mongoose from 'mongoose';
import {Request, Response} from "express";

const User = mongoose.model('User', UserSchema);

export class UserService {

/*     public getTeste() {
        const text = [{ "firstName":"John" , "lastName":"Doe" },
        { "firstName":"Anna" , "lastName":"Smith" },
        { "firstName":"Peter" , "lastName":"Jones" }];
        return text;
    } */

    public async getAllUsers() {
        try {
            const users = await User.find({});
            return users;
        } catch (err) {
            throw new Error('Erro de conexão');
        }
    }

    public async insertUser(req: Request) {
        const newUser = new User(req.body); 
        try {
            await newUser.save();
        } catch (err) {
            throw new Error('Erro de conexão');
        }
    }

    public async updateUser(req: Request) {
        try {
            const user = await User.findOneAndUpdate(
                {cpf: req.body.cpf},
                req.body,
                { new: true }
            );
            return user;
        } catch (err) {
            throw new Error('Erro de conexão');
        } 
    }

    public async getUser(req: Request) {
        try {
            const user = await User.findOne({cpf: req.params.cpf});
            return user;
        } catch (err) {
            throw new Error('Erro de conexão');
        }
    }

    public async deleteUser(req: Request) {
        try {
            const user = await User.findOneAndDelete({cpf: req.params.cpf});
            return user;
        } catch (err) {
            throw new Error('Erro de conexão');
        }
    }
}