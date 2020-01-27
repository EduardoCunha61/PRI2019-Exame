var express = require('express');
var router = express.Router()
var Obra = require('../../controllers/obras')

router.get('/', function(req, res) {  
    Obra.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem: ' + erro)) 

    // if(req.query.by  === 'compositor'){
    //     Obra.getcompositores()
    //         .then(dados => res.jsonp(dados))
    //         .catch(erro => res.status(500).send('Erro na consulta: ' + erro))
    // };

    // if(req.query.by  === 'instrumento'){
    //     Obra.getinstrumentos()
    //         .then(dados => res.jsonp(dados))
    //         .catch(erro => res.status(500).send('Erro na consulta: ' + erro))
    // };
}); 

router.get('/:id', function(req, res) {
    Obra.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na consulta: ' + erro))
});

module.exports = router;