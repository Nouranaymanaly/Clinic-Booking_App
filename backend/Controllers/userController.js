import User from "../models/UserSchema.js";

export const updateUser = async (req,res) => {
   const id = req.params.id
   try {
    const updatedUser = await User.findByIdAndUpdate (id, {$set:req.body}, {new:true}) ;
    res.status(200).json({sucess:true,message:'Sucessfully updated', data:updateUser});
   } catch (err) {
    res.status(500).json({sucess:false,message:'Failed to update', data:updateUser})
   }
};
 
export const deleteUser = async (req,res) => {
    const id = req.params.id
    try {
     await User.findByIdAndDelete (id, {$set:req.body}, {new:true}) ;
     res.status(200).json({sucess:true,message:'Sucessfully deleted'});
    } catch (err) {
     res.status(500).json({sucess:false,message:'Failed to delete'})
    }
 };
  
export const getSingleUser = async (req,res) => {
    const id = req.params.id
    try {
     const user = await User.findById (id).select('-password') ;
     res.status(200).json({sucess:true,message:'User found', data:user});
    } catch (err) {
     res.status(404).json({sucess:false,message:'No user found'})
    }
 };

 export const getAllUsers = async (req,res) => {
    try {
     const users = await User.find ({}).select('-password') ;
     res.status(200).json({sucess:true,message:'User found', data:user});
    } catch (err) {
     res.status(404).json({sucess:false,message:'No found'})
    }
 };
