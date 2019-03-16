const Conta = require('../models/Conta')(/* construtor */);

const controller = {}; // Objeto vazio

// Toda função de controller que estiver
// ligado a um model deve ter dois parâmetros:
// req(uest) e res(ponse)
controller.novo = function (req, res) {
   // Os dados a serem gravados estão
   // dentro de req.body
   Conta.create(req.body).then(
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
   Conta.find().exec().then(
      // callback do bem
      function (contas) {
         //todos os contas em um vetor
         //retorna o vetor encontrado
         res.json(contas).end();
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

   Conta.findById(id).exec().then(
      //cllback do bem
      function (conta) {//Zero ou um conta
         if (conta) {// conta encontrado
            res.json(conta).end();
         }
         else { // conta não encontrado
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
   Conta.findByIdAndUpdate(id, req.body).exec().then(
      //Callback do bem
      function (conta) {
         if (conta) {
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

   Conta.findOneAndDelete({_id: id}).exec().then(
      //callback do bem
      function(conta){
         if (conta){
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