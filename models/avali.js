const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Avaliacao = new Schema({
    cod_ava: {
        type: Number,
        required: true
    },
    tipo_modelo_ava: {
        type: String,
        required: true        
    },
    descricao_ava: {
        type: String,
        required: true          
    }
});
    
const avaliacoes = mongoose.model("avaliacoes", Avaliacao)

module.exports = avaliacoes;