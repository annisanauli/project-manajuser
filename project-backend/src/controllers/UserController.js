const controllers = {}
//import model and sequelize
var sequelize = require('../config/database');
var User = require('../model/User');
var Role = require('../model/Role');

sequelize.sync()
  //get all data from user 
  controllers.list = async (req,res) => {
    const data = await User.findAll({
      include: [ Role ]
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      return error;
    })
    res.json({ success: true, data:data });
  }
  
  //create new user
  controllers.create = async (req,res) => {
    // data parameters from post
    const {name, email, password, phone, role } = req.body;
    console.log("Role es ==>"+role)
    const data = await User.create({
      name:name,
      email:email,
      password:password,
      phone:phone,
      roleId:role
    })
    .then(function(data){
      return data;
    })
    .catch(error=>{
      console.log(error)
      return error;
    })
    // return res
    res.status(200).json({
       success:true,
       message:"Data successfully created",
       data:data
     })
  }
  
  module.exports = controllers;
