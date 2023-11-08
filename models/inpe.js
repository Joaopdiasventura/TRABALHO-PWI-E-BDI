const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Inspetor = new Schema({
    nome_ins: {
        type: String,
        required: true
    },
    telefone_ins: {
        type: Number,
        required: true
    },
    periodo_inspecao: {
        type: String,
        required: true
    },
    ctps_ins: {
        type: Number,
        required: true
    }

});
    
const inspetores = mongoose.model("inspetores", Inspetor)

module.exports = inspetores;