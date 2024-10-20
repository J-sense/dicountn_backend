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
const login = async (userData) => {
    try {
      const isuser = await User.findOne({ email: userData.email });
      if (!isuser) {
        throw new Error('User not found');
      }
  
      console.log('Plain text password:', userData.password);  // Debug
      console.log('Hashed password from DB:', isuser.password);  // Debug
  
      const ispassword = await bcrypt.compare(userData.password, isuser.password);
      if (!ispassword) {
        throw new Error('Password not matched');
      }
  
      return isuser;
    } catch (error) {
      console.log(error);
    }
  };
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
    delateOne

}
export default userService;