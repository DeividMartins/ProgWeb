const mongoose = require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
        modelo: {
            type: String,
            require: true
        },
        marca: {
            type: String,
            require: true
        },
        ano_fabricacao:{
            type: Number,
            require: true
        },
        ano_modelo:{
            type: Number,
            require: true
        },
        cor:{
            type: String,
            require: true
        },
        combustivel:{
            type: String,
            require: true
        },
        tipo:{
            type: String,
            require:true
        },
        placa:{
            type: String,
            require: true,
            index:{
                unique:true
            }
        },
        valor_compra:{
            type: Number,
            require: true
        },
        data_compra:{
            type: Date, 
            require:true
        },
        valor_venda:{
            type:Number
        },
        data_venda:{
            type: Date
        }
    });

    // coleção sempre no plural
    return mongoose.model('Veiculo', schema, 'veiculos');

}