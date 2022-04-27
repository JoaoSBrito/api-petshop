const ModeloTabelaProduto = require('./ModeloTabelaProduto')
const Modelo = require('./ModeloTabelaProduto')

module.exports = {
  listar(idFornecedor) {
    return Modelo.findAll({ Where: { fornecedor: idFornecedor } })
  },
  inserir(dados) {
    return Modelo.create(dados)
  },
  remover(idProduto, idFornecedor) {
    return Modelo.destroy({
      where: {
        id: idProduto,
        fornecedor: idFornecedor
      }
    })
  }
}
