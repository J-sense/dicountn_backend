import { Schema, model }  from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["customer" || "admin"],
        default:"customer"
    },

},{timestamps: true})
const User = model("User", UserSchema)
export default User;