const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cargo = new Schema({
    nome_car: {
        type: String,
        required: true
    },
    requisito: {
        type: String,
        required: true        
    },
    descricao_car: {
        type: String,
        required: true           
    }

});
    
const cargos = mongoose.model("cargos", Cargo)

module.exports = cargos;