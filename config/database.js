const mongoose = require('mongoose');

module.exports = function(uri){
    mongoose.connect(uri,
        { useNewUrlParser: true});


mongoose.connection.on('connected', function() {
    console.log('Mongoose! conectado a' + uri);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose! desconectado a' + uri);
});

mongoose.connection.on('error', function(erro){
    console.log('Mongoose! ERRO:' + erro);
});

//Capturamos um sinal de encerramento (SIGINT), ctrl+c
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose desconectado pelo termino da sessao');
        // 0 indica que a finalização ocorreu sem erros
        process.exit(0);
    });
});

}
