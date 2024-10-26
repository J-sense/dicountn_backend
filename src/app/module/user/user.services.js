import { get } from "mongoose";
import User from "./user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
const login = async (userdata) =>{
  const isuser = await User.findOne({email: userdata.email})
  if(!isuser){
    throw new Error("User not found")
  }
  const ispassword = await bcrypt.compare(userdata.password,isuser.password)
  if(!ispassword){
    throw new Error("Password did not matched")
  }
  const obj = {
    email:isuser.email,
    role:isuser.role
    
  }
  const token = jwt.sign(obj,"hotelmanagement123",{expiresIn:"7d"})
  return {
    data:isuser,
    token: token
  }
}
const myprofile = async (email) =>{
  const myprofile = await User.findOne({email: email})
  return myprofile
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
    login,
    getalluser,
    delateOne,
    myprofile

}
export default userService;