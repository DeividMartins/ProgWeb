const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        descricao: {
            type: String,
            require: true
        }
    });
    return mongoose.model('Combustivel', schema, 'combustivels');

}