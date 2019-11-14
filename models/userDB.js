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

module.exports.getUser = function (userId,pass) {
    try {
	return user_model.findOne({username:userId,password:pass});
    } catch(err) {
	console.log(err);
    }
}
module.exports.addUser = function(username, first_name, last_name, email, password){
  var user = new user_model({username: username, first_name: first_name, last_name: last_name, email: email, password: password});
  console.log(user);
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
