const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        nomeAgencia: {
            type: String,
            require: true
        },
        agencia: {
            type: String,
            require: true
        },
        conta: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        saldo: {
            type: Number,
            require: true
        },
        tarifa: {
            type: Number,
            require: true
        }
    });
    return mongoose.model('Conta', schema, 'contas');

}