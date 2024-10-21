import express from "express";

import itemsController from "./items.controller.js";
const router = express.Router()
//add items--
router.post("/items", itemsController.additem)
//add get single items--
router.get("/items/:id", itemsController.findsingleitem)
//delete single items--
router.delete("/items/:id", itemsController.deleteOne)
//update single items--
router.patch("/items/:id", itemsController.updatedItem)
//get all  items--
router.get("/items", itemsController.getall)
const itemsRoutes = router;
export default itemsRoutes;