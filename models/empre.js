import mongoose from "mongoose";
import { Schema } from "mongoose";

const Empresa = new Schema({
    nome_emp: {
        type: String,
        required: true
    },
    telefone_emp: {
        type: Number,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        required: true
    },
    chave_gerente: {
        type: String,
        required: true
    },
    chave_funcionario: {
        type: String,
        required: true
    }

});
    
const empresas = mongoose.model("empresas", Empresa)

export default empresas;