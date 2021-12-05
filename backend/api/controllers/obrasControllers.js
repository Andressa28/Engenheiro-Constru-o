const models = require('../models/obrasModels.js');

module.exports = {
    obrasMenu,
    obrasGetAll,
    obrasGetById,

    obrasNova,
    obrasEditar,
}

// function obrasMenu(req, res) {
//     res.json('Rota encontrada!');
//     console.log('Rota encontrada!');
// }

function obrasMenu(req, res) {
    console.log('Listar Obras {M O D E L}');
    models.getAllObras(function (err, resposta) {
        console.log('Retorno de obras {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
function obrasGetAll(req, res) {
    console.log('Listar Obras {M O D E L}');
    models.getAllObras(function (err, resposta) {
        console.log('Retorno de obras {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function obrasGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro esperado: ' + id);
    models.getByIdObras(id, function (err, resposta) {
        console.log('Retorno de Obra Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function obrasNova(req, res) {
    var dados = req.body;
    console.log("Gravando novo registro de Obra...");
    console.log(req.body);
    dados.obr_codigo = null;
    console.log("Inserindo novo registro de Obra...");
    models.novaObras(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/obras');
    })
}

function obrasEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando registro de Obras...", dados);

    models.editarObras(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/obras');
    });
}
