const Autor = require("../models/Autor")
const Categoria = require("../models/Categoria")
const Livro = require("../models/Livro")

class LivroController {

    async listaTodos(request, response) {
        try {
            const livros = await Livro.findAll({
                include : [
                    {
                        model: Categoria,
                        attributes: [['id', 'id_categoria'], 'nome'],
                    },
                    {
                        model: Autor
                    }
                ]
            })
            response.json(livros)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao listar os livros'
            })
        }
    }
}

module.exports = new LivroController()