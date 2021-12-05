// const modelsIndex = require('../models/indexModels.js');

module.exports = {
    indexControllers,
    notFoundControllers
}

function indexControllers(req, res) {
    res.json('Rota raiz do Projeto Obras encontrada!');
    console.log('Rota raiz do Projeto Obras encontrada!');
}

function notFoundControllers(req, res) {
    res.json('Rota Inexistente! 404');
    console.log('Rota Inexistente! 404');
}
