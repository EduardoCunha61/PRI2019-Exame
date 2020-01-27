var Obra = require('../models/obras')

module.exports.listar = () => {
    return Obra
        .find({}, {_id:0,id:1,titulo:1,tipo:1,compositor:1})
        .exec()
}

module.exports.consultar = iid => {
    return Obra
        .findOne({id: iid})
        .exec()
}

module.exports.listcompositores = () => {
    return Obra
        .find({}, {_id:0,compositor:1},{$sort:-1})
        .exec()
}


module.exports.getcompositores = () =>{
    return Obra
    .aggregate([{$unwind:"$compositor"},{$group:{_id:"$compositor", obras: {$push: {titulo: "$titulo"}}}}])
    .exec()
}

module.exports.getinstrumentos = () =>{
    return Obra
    .aggregate([{$unwind:"$instrumentos"},{$group:{_id:"$instrumentos.designacao", obras: {$push: {id: "$id",titulo: "$titulo"}}}}])
    .exec()
}