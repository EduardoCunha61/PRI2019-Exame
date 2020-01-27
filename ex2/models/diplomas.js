const mongoose = require('mongoose')

var diplomaSchema = new mongoose.Schema({
    id: String,
    data: String,
    numero: String,
    tipo: String,
    sumario: String,
    estado: String,
    fonte: String,
    link: String,
    entidades: [],
    processos: [],
});

module.exports = mongoose.model('diplomas', diplomaSchema)

