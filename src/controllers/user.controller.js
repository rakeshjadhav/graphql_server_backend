'use strict';

import User from '../models/user.model.js';


User.findAll = function(req, res) {
  
    User.findAll(function(err, users) {
        console.log('controller')
          if (err)
          res.send(err);
          console.log('res', users);
          res.send({users : users});
          });
};


User.findById = function(req, res) {
    res.send(JSON.stringify(req));
    // User.findById(req.params.id, function(err, user) {
    //     if (err){
    //         return  res.send({err:err});
    //     }else{
    //         console.log(user);
    //         if(user.length > 0){
    //             return  res.send({ users:user});
    //             }else{
    //             return  res.send({ error:false, message: "Invalid  Please try again. !!" });
    //             }
    //     }
    //     });
    };
  
    export default User;
     