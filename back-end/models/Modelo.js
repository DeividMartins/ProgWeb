const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        _id: Object,
        nome: {
            type: String,
            require: true
        },
        marca:{
            type: mongoose.ObjectId,
            ref: "Marca",
            require:true
        },
        tipo:{
            type: mongoose.ObjectId,
            ref: "Tipo",
            require:true
        }
    });
    return mongoose.model('Modelo', schema, 'modelos');

}