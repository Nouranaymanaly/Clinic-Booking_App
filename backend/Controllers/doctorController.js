import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req,res) => {
   const id = req.params.id
   try {
    const updatedDoctor = await Doctor.findByIdAndUpdate (id, {$set:req.body}, {new:true}) ;
    res.status(200).json({sucess:true,message:'Sucessfully updated', data:updateDoctor});
   } catch (err) {
    res.status(500).json({sucess:false,message:'Failed to update', data:updateDoctor})
   }
};
 
export const deleteDoctor = async (req,res) => {
    const id = req.params.id
    try {
     await Doctor.findByIdAndDelete (id, {$set:req.body}, {new:true}) ;
     res.status(200).json({sucess:true,message:'Sucessfully deleted'});
    } catch (err) {
     res.status(500).json({sucess:false,message:'Failed to delete'})
    }
 };
  
export const getSingleDoctor = async (req,res) => {
    const id = req.params.id
    try {
     const Doctor = await Doctor.findById (id).populate("reviews").select('-password') ;
     res.status(200).json({sucess:true,message:'Doctor found', data:Doctor});
    } catch (err) {
     res.status(404).json({sucess:false,message:'No Doctor found'})
    }
 };

 export const getAllDoctors = async (req,res) => {

    try {

     
    const {query} = req.query ;
    let doctors ;

    if(query)
    {
         doctors = await Doctor.find({isApproved:'approved',
        $or: [
            { name: { $regex:query, $options: "i" } },
            { specialization: {$regex: query, $options: "i" }}
        
        ], 
    }).select("-password") ;
    } else {
         doctors = await Doctor.find ({}).select('-password') ;
    }

     res.status(200).json({sucess:true,message:'Doctor found', data:Doctors});

    } catch (err) {
     res.status(404).json({sucess:false,message:'No found'})
    }
 };
