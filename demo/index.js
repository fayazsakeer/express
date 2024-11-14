import { error } from "console";
import express from"express";
import router from "../router.js";
import mw from "../middlewares/test-middleware.js";
const port = 3000;


let list = []

const server = express();
server.use(express.json());
server.use(express.static("./pages"))
server.use(mw);
server.use("/api",router);

// server.post("/todo",(req,res)=>{
//     let value = req.body.todo;
//     list.push(value)
//     console.log(list);
//     res.json({msg: "Added Successfully"})
// })
// server.get("/todo",(req,res)=>{
//     let value = req.body.todo
// });



server.listen(port,error => {
    if(error) return console.log(error);
    console.log(`server started on port ${port}`);
    
    
})