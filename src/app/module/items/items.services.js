import Item from "./items.model.js"

const additem =async (item)=>{
  const additem = await Item.create(item)
  return additem
}

const findsingleItem = async(id) =>{
    const findOne = await Item.findById(id)
    return findOne
}

const getall = async ()=>{
    const getall = await Item.find({})
    return getall
}
const deleteOne = async (id)=>{
    const deleteOne = await Item.findOneAndDelete(id)
    return deleteOne;

}
const updataone =async(itemsData,data)=>{
    const {title,description,price} = data
    const updatedItem = await Item.findByIdAndUpdate(
        itemsData, 
      {
        title,description,price
      },
        { new: true } 
      );
      return updatedItem;
}



const serviceItem ={
    additem,
    findsingleItem,
    getall,
    deleteOne,
    updataone
}
export default serviceItem;