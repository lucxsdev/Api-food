const Product = require('../models/Product')();

const productController = {};

// cria registro
productController.store = function(req, res){
    Product.create(req.body).then(
        function(){
            res.sendStatus(201).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

productController.show = function(req, res) {
    Product.find().exec().then(
       // Callback do bem
       function(products) {
          // Retorna TODOS os veículos em um vetor,
          // ou um vetor vazio se não tiver nada
          res.json(products).end();         
       },
       // Callback do mal
       function(erro) {
          console.error(erro);
          res.sendStatus(500).end();
       }
    
    );
 
 }

// mostra apenas um
productController .showId = function(req, res){
    var id = req.params.id

    Product.findById(id).exec().then(
        function(products){
            if (products){
                res.json(products).end();
            }else{
                res.sendStatus(404);
            }
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}



module.exports = productController ;