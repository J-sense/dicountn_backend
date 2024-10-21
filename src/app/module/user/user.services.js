import { get } from "mongoose";
import User from "./user.model.js"
import bcrypt from "bcrypt";

const signup = async(userData)=>{
 try {
    const data = {...userData}
    const hashpassword = await bcrypt.hash(data.password, 12)
    data.password = hashpassword
    const result = await User.create(data)
   return result
 } catch (error) {
    console.log(error)
 }
}

const getalluser = async ()=>{
    const result = await User.find({})
    return result
}
const delateOne = async (userId)=>{
    try {
        const result = await User.findByIdAndDelete(userId)
         return result
     } catch (error) {
     console.log(error)       
    }
}
const userService ={
    signup,
 
    getalluser,
    delateOne

}
export default userService;