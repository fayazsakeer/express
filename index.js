import { error } from "console";
import express from"express";
const port = 3000;
let list = []
const server = express();
server.use(express.json());
server.use(express.static("./pages"))

server.post("/todo",(req,res)=>{
    let value = req.body.todo;
    list.push(value)
    console.log(list);
    res.json({msg: "Added Successfully"})
})
// server.get("/todo",(req,res)=>{
//     res.send(list.json());
// });



server.listen(port,error => {
    if(error) return console.log(error);
    console.log(`server started on port ${port}`);
    
    
})