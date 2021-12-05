const controller = require('../controllers/engenheirosControllers.js');

server.get('/engenheiros', controller.engenheirosMenu)
server.get('/engenheiros', controller.engenheirosGetAll)
server.get('/engenheiros/:codigo', controller.engenheirosGetById)
server.post('/engenheiros', controller.engenheirosNovo)
server.put('/engenheiros/:codigo', controller.engenheirosEditar)
