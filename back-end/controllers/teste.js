module.exports = function () {
    let controller = {} //Objeto vazio
    controller.teste = function (req, res) {
        let json = {
            nome: 'Fulano de tall',
            idade: 33
        };

        res.send(json);
    }
    return controller;
};