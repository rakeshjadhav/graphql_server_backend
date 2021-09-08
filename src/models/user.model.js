'use strict';
import dbConn from '../../config/db.config.js';

//object create

var Users= function(product){
  this.id     = product.product_id;
  this.name     = product.product_name;
  this.email = product.price;
  this.createdAt     = new Date();
  this.updatedAt     = new Date();
};


Users.findAll = function (result) {
    dbConn.query("Select u.* from users as u", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('users : ', res);
      result(null, res);
    }
    });
    };


    Users.findById = function (id, result) {
        dbConn.query("Select * from users where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
        });
    };

// module.exports = mongoose.model('User', UserSchema);
// module.exports= Users;
export default Users;