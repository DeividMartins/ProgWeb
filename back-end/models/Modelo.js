const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        
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
        },
        combustivel:{
            type: mongoose.ObjectId,
            ref: "Combustivel",
            require:true
        },
        cor:{
            type: mongoose.ObjectId,
            ref: "Cor",
            require:true
        }


    });
    return mongoose.model('Modelo', schema, 'modelos');

}