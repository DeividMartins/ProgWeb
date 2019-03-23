const Marca = require('../models/Marca')(/* construtor */);

const controller = {}; // Objeto vazio

// Toda função de controller que estiver
// ligado a um model deve ter dois parâmetros:
// req(uest) e res(ponse)
controller.novo = function (req, res) {
   // Os dados a serem gravados estão
   // dentro de req.body
   Marca.create(req.body).then(
      // Callback se der certo
      function () {
         //res.send(null); // Resposta sem conteúdo
         // HTTP 201: Criado
         res.sendStatus(201).end();
      },
      // Callback se der errado
      function (erro) {
         console.error(erro); // Mostra o erro no terminal
         // HTTP 500: Erro interno do servidor
         res.sendStatus(500).end();
      }
   );
}

controller.listar = function (req, res) {
   Marca.find().exec().then(
      // callback do bem
      function (marcas) {
         //todos os marcas em um vetor
         //retorna o vetor encontrado
         res.json(marcas).end();
      },
      // callback do mal
      function (erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   )
}

controller.obterUm = function (req, res) {
   const id = req.params.id;

   Marca.findById(id).exec().then(
      //cllback do bem
      function (marca) {//Zero ou um marca
         if (marca) {// marca encontrado
            res.json(marca).end();
         }
         else { // marca não encontrado
            res.sendStatus(404).end();
         }
      },
      //callback do mal
      function (erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}

controller.atualizar = function (req, res) {
   // Capturar  o id de dentro
   const id = req.body._id;

   // Encontrar o objeto identificador pelo id
   // e substitui seu conteudo por req.body
   Marca.findByIdAndUpdate(id, req.body).exec().then(
      //Callback do bem
      function (marca) {
         if (marca) {
            //Encontrou e atualizou
            res.sendStatus(204), end();
         } else {
            //Não encontrou(e não atualizou)
            res.sendStatus(404).end();
         }
      },
      //callback do mall
      function (erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}

controller.excluir = function (req, res) { 
   //Capturamos o id  a partir do url da aquisição
   const id = req.params.id;

   Marca.findOneAndDelete({_id: id}).exec().then(
      //callback do bem
      function(marca){
         if (marca){
         //Encontrou e excluiu
         res.sendStatus(204).end();
         }else{
            //Não encontrou( e ão excluiu)
            res.sendStatus(404).end();
         }
      },
      //Callback do mal
      function(erro){
         console.error(erro);
         res.sendStatus(500).end();
      }
   )
}
module.exports = controller;