const mongoose = require('mongoose')

module.exports = function (uri) {
    mongoose.connect(uri, { useNewUrlParser: true });

    mongoose.connection.on('connected', function () {
        console.log('Mongoose! conectado a ' + uri);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose! desconectado de ' + uri);
    });

    mongoose.connection.on('error', function (erro) {
        console.log('Mongoose! ERRO: ' + erro);
    });

    // Capturaramos um sinal de encerramento(SIGINT), Ctrl+c
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose! Desconectado pelo termino da aplicação');
            // 0 indica que a finalização ocorreu sem erros
            process.exit(0);
        });
    });
}