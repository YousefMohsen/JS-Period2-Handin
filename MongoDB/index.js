
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://test1user:test1password@ds151014.mlab.com:51014/test1');



// create a schema

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
      age: Number,
      website: String
    },
    created_at: Date,
    updated_at: Date
  });
  
  // the schema is useless so far
  // we need to create a model using it
  var User = mongoose.model('User', userSchema);
  

  
  // make this available to our users in our Node applications
  //module.exports = User;


  //ADD USER



//////
var messi = new User({
    name: 'Lionel Messi',
    username: 'Messiergud',
    password: 'JaDetErhan',
    admin: true
    
  });


/*  messi.save(function(err) {
    if (err) throw err;
  
    console.log('User created!');
  });*/

  /*User.find({}, function(err, users) {
    if (err) throw err;
  
    // object of all the users
    console.log(users);
  });
*/

// get the user starlord55
User.findOneAndUpdate({ username: 'Messiergud' },  function(err, user) {
    if (err) throw err;
    user.password = "newPassword";
  
    // we have the updated user returned to us
    console.log(user);
  });

