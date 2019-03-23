const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        modelo: {
            type: mongoose.ObjectId,
            ref: "Modelo",
            require: true
        },
        ano_fabricacao: {
            type: Number,
            require: true
        },
        ano_modelo: {
            type: Number,
            require: true
        },
        cor: {
            type: mongoose.ObjectId,
            ref: "Cor",
            require: true
        },
        combustivel: {
            type: mongoose.ObjectId,
            ref: "Combustivel",
            require: true
        },
        
        placa: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        importado: {
            type: Boolean,
            require: true
        },
        valor_compra: {
            type: Number,
            require: true
        },
        data_compra: {
            type: Date,
            require: true
        },
        valor_venda: {
            type: Number
        },
        data_venda: {
            type: Date
        }
    });

    // coleção sempre no plural
    return mongoose.model('Veiculo', schema, 'veiculos');

}