const prisma = require("../config/prisma")

exports.getUserId = (id) =>{
    return prisma.user.findFirst({
        where:{
            id
        }
    })
}