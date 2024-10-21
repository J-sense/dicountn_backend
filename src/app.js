import express from "express"
import userRoutes from "./app/module/user/user.route.js"
import itemsRoutes from "./app/module/items/items.route.js"
const app = express()

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.use(express.json())
app.use("/api", itemsRoutes)
app.use("/api", userRoutes)
export default app