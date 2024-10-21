import userService from "./user.services.js"

const signup = async (req,res,next)=>{
   try {
    const result = await userService.signup(req.body)
    res.status(200).json({
        message:"user create successfully",
        data: result,
        message:true,
    })
   } catch (error) {
    next(error)
   }
}
const login = async (req,res,next)=>{
    try {
        const result = await userService.login(req.body)
            res.status(200).json({
            message:"User login successfully",
            data:result,
            success:true,
    })
    } catch (error) {
        next(error)
        
    }
}
const getall = async (req,res,next)=>{
    try {
      const result = await userService.getalluser()
      res.status(200).json({
            message:"successfully fetched",
            data: result,
            message:true,
      }) 
    } catch (error) {
        next(error)
        
    }
}
const delateOne = async (req,res,next)=>{
    try {
        const result = await userService.delateOne(req.params.id)
        res.status(200).json({
            message:"User deleted sucessfully",
            data:result
        })
        
    } catch (error) {
        next(error)
    }
    
}
const userController = {
    signup,
    login,
    getall,
    delateOne
   
}
export default userController;