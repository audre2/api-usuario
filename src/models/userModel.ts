import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true           
    },
    cpf: {
        type: Number,
        required: true           
    },
    dataNascimento: {
        type: Date
    },
    telefone: {
        type: Number            
    },
});