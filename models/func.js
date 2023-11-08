import mongoose from "mongoose";
import { Schema } from "mongoose";

const Funcionario = new Schema({
    nome_fun: {
        type: String,
        required: true
    },
    telefone_fun: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    cpf_fun: {
        type: Number,
        required: true
    },
    empresa_fun:{
        type: Schema.Types.ObjectId,
        ref: "empresas",
        required : true
    },
    cargo:{
        type: String,
        require: true
    }
});
    
const funcionarios = mongoose.model("funcionarios", Funcionario)

export default funcionarios;