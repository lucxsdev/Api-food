const Product_categories = require('../models/Product_categories')();

const product_categoriesController = {};

// cria registro
product_categoriesController.store = function(req, res){
    Product_categories.create(req.body).then(
        function(){
            res.sendStatus(201).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

product_categoriesController.show = function(req, res) {
    Product_categories.find().exec().then(
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
product_categoriesController .showId = function(req, res){
    var id = req.params.id

    Product_categories.findById(id).exec().then(
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



module.exports = product_categoriesController ;