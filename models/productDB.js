var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var product_model = mongoose.model('productModel',new Schema({prod_name: String, prod_code: String, Email: String, location: String, category: String, price: Number, productdesc: String, main_image: String,image_1:String,image_2:String,image_3:String}), 'products');



module.exports.getMatchingCategoryItem = function(requestedCategory){
  try {
return product_model.find({category: requestedCategory});
  } catch(err) {
console.log(err);
  }
}

module.exports.getMatchingLocItem = function(requestedCategory){
  try {
return product_model.find({location: requestedCategory});
  } catch(err) {
console.log(err);
  }
}

module.exports.getAllItems = function () {
    try {
	return product_model.find();
    } catch(err) {
	console.log(err);
    }
}

module.exports.getProduct = function (code) {
    try {
	return product_model.findOne({prod_code:code});
    } catch(err) {
	console.log(err);
    }
}

module.exports.getItemByName = function (requestedName) {
    try {
	return product_model.findOne({item_name:requestedName});
    } catch(err) {
	console.log(err);
    }
}

module.exports.updateItemStatus = function(code,new_status){
  try {
return product_model.update({item_code:code},{$set:{status:new_status}});
  } catch(err) {
console.log(err);
  }
}

module.exports.getUserItems = function (username){
  var useritems = [];
  try {
  useritems = product_model.find({user_id:username,"status":{$ne: "Deleted"}});
  } catch(err) {
console.log(err);
  }
  return useritems;
}

module.exports.addItem = function(prod_name, prod_code, Email, location, category, price, productdesc, main_image, image_1, image_2, image_3){
    var prod = new product_model({prod_name: prod_name, prod_code: prod_code, Email: Email, location: location, category: category, price: price, productdesc: productdesc,main_image: main_image,image_1: image_1,image_2: image_2,image_3: image_3});
    console.log(prod);
    prod.save(function(err) {
            if(err) console.log('Error on save' + err);
          });
        }
module.exports.addItem = function(prod_name, Email, location, category, price, productdesc){
  var prod = new product_model({prod_name: prod_name, prod_code: "", Email: Email, location: location, category: category, price: price, productdesc: productdesc,main_image: "",image_1: "",image_2: "",image_3: ""});
            console.log(prod);
            prod.save(function(err) {
                    if(err) console.log('Error on save' + err);
                  });
                }
module.exports.deleteItem = function (code) {
      try {
    	return product_model.deleteOne({prod_code:code});
        } catch(err) {
    	console.log(err);
        }
      }

      module.exports.getProductEmail = function (email) {
          try {
            var products = [];
            console.log("In function");
      	     products = product_model.find({Email:email});
          } catch(err) {
      	console.log(err);
          }
          return products;
      }
// ____________________________
//
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var product_model = mongoose.model('productModel',new Schema({prod_name: String, prod_code: Number, Email: String, location: String, category: String, price: Number, productdesc: String, main_image: String,image_1:String,image_2:String,image_3:String}), 'products');
//
// module.exports.addItem = function(prod_name, prod_code, Email, location, category, price, productdesc, main_image, image_1, image_2, image_3){
//   try {
//     var prod = new product_model({prod_name: prod_name, prod_code: prod_code, Email: Email, location: location, category: category, price: price, productdesc: productdesc,main_image: main_image,image_1: image_1,image_2: image_2,image_3: image_3});
//     prod.save(function(err) {
//             if(err) console.log('Error on save' + err);
//         });
//   } catch (e) {
//     console.log("error");
//   }
//
//
// module.exports.getMatchingCategoryItem = function(requestedCategory){
//   try {
// return product_model.find({category: requestedCategory});
//   } catch(err) {
// console.log(err);
//   }
// }
//
// module.exports.getAllItems = function () {
//     try {
// 	return product_model.find();
//     } catch(err) {
// 	console.log(err);
//     }
// }
//
// // module.exports.getProduct = function (requestedCode) {
// //     try {
// // 	return product_model.findOne({item_code:requestedCode});
// //     } catch(err) {
// // 	console.log(err);
// //     }
// // }
// module.exports.getProductEmail = function (email) {
//     try {
//       var products = [];
//       console.log("In function");
// 	     products = product_model.find({Email:email});
//     } catch(err) {
// 	console.log(err);
//     }
//     return products;
// }
//
// // module.exports.getItemByName = function (requestedName) {
// //     try {
// // console.log("GETTING ITEM");
// // 	var it = product_model.find({Email:requestedName});
// //   console.log(it);
// //   return it;
// //     } catch(err) {
// // 	console.log(err);
// //     }
// // }

// module.exports.updateItemStatus = function(code,new_status){
//   try {
// return product_model.update({item_code:code},{$set:{status:new_status}});
//   } catch(err) {
// console.log(err);
//   }
// }
//
// module.exports.getUserItems = function (username){
//   var useritems = [];
//   try {
//   useritems = product_model.find({user_id:username,"status":{$ne: "Deleted"}});
//   } catch(err) {
// console.log(err);
//   }
//   return useritems;
// }
