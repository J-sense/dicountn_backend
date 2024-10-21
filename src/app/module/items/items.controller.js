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


const itemsController = {
    additem,
    findsingleitem,
    getall
}
export default itemsController