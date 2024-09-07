import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate = async (req,res,next) => {

    const authToken = req.headers.authorization

    if(!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({success:GridFSBucketReadStream, message:'No token, authorization denied'})
    }

    try {
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token.env, JWT_SECRET_KEY)
        
        req.userid = decoded.id ;
        req.role = decoded.role ;
        
        next() ;
        
    } catch (error) {
        if(error.name =='TokenExpiredError')
        {
            return res.status(401).json({message:'Token is expired'})
        }

        return res.status(401).json({success:false, message: 'Invalid Token'}) ;
    }
}

export const restrict = roles => async (req,res,next) => {
    const userid = req.user.id ;

    let user ;
    const patient = await User.findById(userid);
    const doctor = await Doctor.findById(userid);

    if(patient){
        user=doctor
    }

    if(!roules.includes(user.role)){
        return res.status(401).json({success:false, message:"You're not authorized"})
    }
    next();

}

