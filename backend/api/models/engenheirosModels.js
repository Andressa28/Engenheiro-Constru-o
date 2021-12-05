const conexao = require('../../config/conexao.js');

module.exports = {
    getAllEngenheiros,
    getByIdEngenheiros,

    novoEngenheiro,
    editarEngenheiros   
}

function getAllEngenheiros(callback) {
    conexao.query('select * from ENGENHEIRO', callback)
}

function getByIdEngenheiros(id, callback) {
    conexao.query('select * from ENGENHEIRO WHERE ENG_CODIGO = ' + id, callback)
}

function novoEngenheiro(id, callback) {
    var msql = 'INSERT INTO ENGENHEIRO SET ? ';

    conexao.query(msql, id, callback)
}

function editarEngenheiros(id, callback) {
    console.log('Estou alterando o engenheiros { M O D E L } .......' + id);

    var msql = "UPDATE ENGENHEIRO SET ENG_NOME = '" + id.ENG_NOME +
        "' , ENG_APELIDO      = '" + id.ENG_APELIDO +
        "' , ENG_TELEFONE     = '" + id.ENG_TELEFONE +
        "' , ENG_CREA         = '" + id.ENG_CREA +
        "' , ENG_DTFORMATURA  = '" + id.ENG_DTFORMATURA +
        "'  WHERE ENG_CODIGO  = '" + id.ENG_CODIGO + "'";

    console.log(msql);

    conexao.query(msql, callback);
}
