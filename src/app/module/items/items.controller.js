import serviceItem from "./items.services.js"

const additem = async (req, res, next) =>{
    try {
        const result = await serviceItem.additem(req.body)
        res.status(200).json({
            message:"Item added successfully",
            success:true,
            data:result
        })
    } catch (error) {
        next(error)
    }
}
const findsingleitem = async (req, res, next) =>{
    try {
        const result = await serviceItem.findsingleItem(req.params.id)
        res.status(200).json({
            message:"single item find",
            success:true,
            data:result
        })
    } catch (error) {
        next(error)
    }
}


const getall = async (req,res,next)=>{
    try {
        const result = await serviceItem.getall()
        res.status(200).json({
            message:"successfully get all",
            success:true,
            data:result
        })
    } catch (error) {
        next(error)
    }

}
const deleteOne = async (req,res,next)=>{
    try {
        const result = await serviceItem.deleteOne(req.params.id)
        res.status(200).json({
            message:"user delete successfully",
            success:true,
            data:result
        })
    } catch (error) {
        next(error)
        
    }
}
const updatedItem = async (req,res,next)=>{
    try {
        const id = req.params.id
        const data = req.body
        const result = await serviceItem.updataone(id,data)
        res.status(200).json({
            message:"Items updated successfully",
            success:true,
            data:result
        })
    } catch (error) {
        next(error)
        
    }
}


const itemsController = {
    additem,
    findsingleitem,
    getall,
    deleteOne,
    updatedItem
}
export default itemsController