var Diploma = require('../models/diplomas')

module.exports.listar = () => {
    return Diploma
        .find()
        .exec()
}

module.exports.entidades = () =>{
    return Diploma
        .aggregate([{$unwind: "$entidades"}, {$group: {_id: "$entidades"}}])

}

module.exports.consultar = id => {
    return Diploma
        .findOne({id: id})
        .exec()
}