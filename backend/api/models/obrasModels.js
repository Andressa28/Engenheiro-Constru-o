const conexao = require('../../config/conexao.js');

module.exports = {

    getAllObras,
    getByIdObras,
    novaObras,
    editarObras
}

function getAllObras(callback) {
    conexao.query('select * from OBRA', callback)
}

function getByIdObras(id, callback) {
    conexao.query('select * from OBRA WHERE OBR_CODIGO = ' + id, callback)
}

function novaObras(id, callback) {
    var msql = 'INSERT INTO OBRAS SET ? ';

	conexao.query(msql, id, callback)
}

function editarObras(id, callback) {
    console.log('Estou alterando obras { M O D E L } .......' + id);

    var msql = "UPDATE OBRAS SET OBR_CIDADE = '" + id.OBR_CIDADE +
    "' , OBR_TIPO = '" + id.OBR_TIPO + 
    "' , OBR_VALOR = '" + id.OBR_VALOR + 
    "' , OBR_INICIOOBRA = '" + id.INICIOOBRA + 
    "'  WHERE OBR_CODIGO = '" + id.OBR_CODIGO + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}