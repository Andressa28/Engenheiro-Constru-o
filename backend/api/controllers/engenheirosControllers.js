const models = require('../models/engenheirosModels.js');

module.exports = {
    engenheirosMenu,
    engenheirosGetAll,
    engenheirosGetById,

    engenheirosNovo,
    engenheirosEditar,
}

// function engenheirosMenu(req, res) {
//     res.json('Rota encontrada!');
//     console.log('Rota encontrada!');
// }

function engenheirosMenu(req,res){
    console.log('Listar engenheiro {M O D E L}');
    models.getAllEngenheiros(function (err, resposta) {
        console.log('Retorno de engenheiro {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function engenheirosGetAll(req, res) {
    console.log('Listar engenheiro {M O D E L}');
    models.getAllEngenheiros(function (err, resposta) {
        console.log('Retorno de engenheiro {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function engenheirosGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdEngenheiros(id, function (err, resposta) {
        console.log('Retorno de engenheiro Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function engenheirosNovo(req, res) {
    var dados = req.body;
    console.log("Gravando novo registro de Engenheiro...");
    console.log(req.body);
    dados.eng_codigo = null;
    console.log("Inserindo novo registro de Engenheiro...");
    models.novoEngenheiro(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/engenheiros');
    })
}

function engenheirosEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando registro de Engenheiro...", dados);

    models.editarEngenheiros(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/engenheiros');
    });
}
