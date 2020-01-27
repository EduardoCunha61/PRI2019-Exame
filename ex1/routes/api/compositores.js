var express = require('express');
var router = express.Router()
var Obra = require('../../controllers/obras')

router.get('/', function(req, res) {
    Obra.listcompositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na consulta: ' + erro))
    });

module.exports = router;