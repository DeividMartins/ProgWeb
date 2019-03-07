const Veiculo = require('../models/Veiculo')(/* construtor */);

const controller = {}; // Objeto vazio

// Toda função de controller que estiver
// ligado a um model deve ter dois parâmetros:
// req(uest) e res(ponse)
controller.novo = function (req, res) {
   // Os dados a serem gravados estão
   // dentro de req.body
   Veiculo.create(req.body).then(
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
   Veiculo.find().exec().then(
      // callback do bem
      function (veiculos) {
         //todos os veiculos em um vetor
         //retorna o vetor encontrado
         res.json(veiculos).end();
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

   Veiculo.findById(id).exec().then(
      //cllback do bem
      function (veiculo) {//Zero ou um veiculo
         if (veiculo) {// veiculo encontrado
            res.json(veiculo).end();
         }
         else { // veiculo não encontrado
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

controller.atualizar = function(req, res){
   // Capturar  o id de dentro
   const id = req.body._id;

   // Encontrar o objeto identificador pelo id
   // e substitui seu conteudo por req.body
   Veiculo.findByIdAndUpdate(id, req.body).exec().then(
      //Callback do bem
      function(veiculo){
         if(veiculo){
            //Encontrou e atualizou
            res.sendStatus(204),end();
         }else{
            //Não encontrou(e não atualizou)
            res.sendStatus(404).end();
         }
      },
      //callback do mall
      function(erro){
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}
module.exports = controller;