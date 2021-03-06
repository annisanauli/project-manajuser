const controllers = {}
//import model and sequelize
var sequelize = require('../config/database');
var User = require('../model/User');
var Role = require('../model/Role');

sequelize.sync()
  //CREATE NEW USER
  controllers.create = async (req,res) => {
    try{
      const {name, email, password, phone, role } = req.body;
      console.log("Role es -->"+role)
      const data = await User.create({
        name:name,
        email:email,
        password:password,
        phone:phone,
        roleId:role
    });
      if(data){
        return res.status(200).json({data:data, success:true, message:"Data successfully created"});
      }
    } catch(error){
      return res.status(500).json ({error: error.message});
    }
  };

  //GET ALL DATA FROM USER
  controllers.list = async (req,res) => {
    try{
      const data = await User.findAll({
      include: [ Role ]
    });
    res.status(200).json({success:true,data:data, message:"Get all data is success"})
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  };
  
  //GET USER USING ID --> EDIT
  controllers.get = async (req,res) => {
    try{
      const { id } = req.params;
      const data = await User.findOne({
          where: { id: id },
          include: [ Role ]
      });
      if (data) {
        return res.status(200).json({data:data, success:true, message:"Success to get user by id"});
      }
      return res.status(404).json({message:"ID does not exists"});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  };

  // UPDATE USER
  controllers.update = async (req, res) => {
    try{
      // parameter id get
      const { id } = req.params;
      // parameter post
      const { name, email, phone, address, role } = req.body;
      // update data
      const data = await User.update({
        name: name,
        email:email,
        address:address,
        phone:phone,
        roleId:role
      },{
        where: { id: id}
      });
      if(data){
        const updatedUser = await User.findOne({ where: { id: id } });
        return res.status(200).json({ success:true, data: updatedUser, message: "Updated successful"});
      }
      return res.status(404).json({message:"User with this ID not found"});
    } catch(error){
      return res.status(500).json({error: error.message})
    }  
  };

  //DELETE USER
  controllers.delete = async (req, res) => {
    try{
        // parameter post
    const { id } = req.params;
    // delete sequelize
    const del = await User.destroy({
      where: { id: id}
    });
      if(del){
        return res.status(200).json({deleted:del, success:true, message:"User successfully deleted"});
      } 
      return res.status(404).json({message:"User not found"});
    } catch(error){
      return res.status(500).json ({error: error.message});
    }
  };
   
  module.exports = controllers;