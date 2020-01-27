const mongoose = require('mongoose')

var obraSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    subtitulo: String,
    compositor: String,
    arranjo: String,
    instrumentos: [{
        designação:String,
        partitura:[{voz:String, path:String}],
        afinacao:String,
        clave:String
    }]
});


module.exports = mongoose.model('obras', obraSchema)