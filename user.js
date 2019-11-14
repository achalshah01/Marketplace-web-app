var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user_model = mongoose.model('userModel',new Schema({username: String, first_name: String, last_name: String, email: String, password: String, user_items: Array}), 'users');

module.exports.getAllUsers = function(){
  try {
return user_model.find();
  } catch(err) {
console.log(err);
  }
}

module.exports.getUser = function (userId) {
    try {
	return user_model.findOne({user_id:userId});
    } catch(err) {
	console.log(err);
    }
}
module.exports.addUser = function(item_code, item_name, category, description, rating, image_url, status, user_id){
  var user = new user_model({user_id: user_id, first_name: first_name, last_name: last_name, email: email, add_1: add_1, add_2: add_2, city: city, state: state, post_code: post_code, country: country});

  addItem(user);
}

module.exports.addUser = function(user){
  user.save(function(err) {
          if(err) console.log('Error on save' + err);
      });
}

module.exports.getValidUser = function(email,pass){
  try {
    return user_model.findOne({email:email,password:pass});
  } catch(err) {
console.log(err);
  }
}
