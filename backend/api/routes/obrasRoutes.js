const controller = require('../controllers/obrasControllers.js');

server.get('/obras', controller.obrasMenu)
server.get('/obras/listar', controller.obrasGetAll)
server.get('/obras/consultar/:codigo', controller.obrasGetById)
server.post('/obras', controller.obrasNova)
server.put('/obras/:codigo', controller.obrasEditar)
