const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        }
    });
    return mongoose.model('Marca', schema, 'marcas');

}