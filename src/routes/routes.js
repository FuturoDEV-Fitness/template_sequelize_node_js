const { Router } = require('express')
const LivroController = require('../controllers/LivroController')

const routes = new Router()

/* coloque  suas rotas aqui */

routes.get('/livros', LivroController.listaTodos)

module.exports = routes