import { model, Schema } from "mongoose";

const itemsSchema = new Schema({
    title:{
        type:String,
        required:[true,"title required"]
    },
    description:{
        type:String,
        required:[true,"description required"]
    },
    price:{
        type:Number,
        required:true
    }


})
const Item = model("item", itemsSchema)
export default Item;