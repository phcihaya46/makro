const prisma = require("../config/prisma")
const createError = require("../utils/createError")
const userServiecs = require("../services/user-services")


const authenticate = async (req, res,next) =>{
    try{
        const {authenticate} = req.headers
        
        if(!authenticate){
            return createError(401,"Unauthorized")
            
        }

        const payload = jwt.vertify(token, process.env.JWT_SECRET)

        if(typeof payload !=="object"||
        !payload?.id||
        typeof payload.id !=="string")
        {
            return createError(400,"Payload not ini= correct format")
        }

        const user = await userService.getUserById(payload.id);

        if(!user) {
            return createError(400,"User not found")
        }

        req.user = user

    } catch(err){
        next(err)
    }
}