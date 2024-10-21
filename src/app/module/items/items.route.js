import express from "express";

import itemsController from "./items.controller.js";
const router = express.Router()
router.post("/items", itemsController.additem)
router.get("/items/:id", itemsController.findsingleitem)
router.get("/items", itemsController.getall)
const itemsRoutes = router;
export default itemsRoutes;