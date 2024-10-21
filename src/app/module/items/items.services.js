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



const serviceItem ={
    additem,
    findsingleItem,
    getall 
}
export default serviceItem;