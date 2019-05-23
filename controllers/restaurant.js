const Restaurant = require('../models/Restaurant')();

const restaurantController = {};

// cria registro
restaurantController.store = function(req, res){
    Restaurant.create(req.body).then(
        function(){
            res.sendStatus(201).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// mostra todos 
// restaurantController.show = function(req, res){
//     Restaurant.find().populate('product_categories').exec().then(
//         function(restaurants) {
        
//            res.json(restaurants).end();         
//         },
//         function(erro) {
//            console.error(erro);
//            res.sendStatus(500).end();
//         }
     
//      );
  
//   }


restaurantController.showId = function(req, res){
    var id = req.params.id

    Restaurant.findById(id)
            .populate({
            path: "product_categories",
            populate:{path:"products"}
            }).exec(function (err, result) {
                res.json(result); 
            },
            function(err) {
                console.error(err);
                res.sendStatus(500).end();
        }

            );
  
  }


// // mostra apenas um
// restaurantController.showId = function(req, res){
//     var id = req.params.id

//     Restaurant.findById(id).exec().then(
//         function(restaurants){
//             if (restaurants){
//                 res.json(restaurants).end();
//             }else{
//                 res.sendStatus(404);
//             }
//         },
//         function(erro){
//             console.log(erro);

//             res.sendStatus(500).end();
//         }
//     );
// }



module.exports = restaurantController;