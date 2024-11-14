import { error } from "console";
import express from"express";
import router from "./router.js";
import mw from "./middlewares/test-middleware.js";
import connect from "./connection.js";
const port = 3000;


let list = []

const server = express();
server.use(express.json());
server.use(express.static("./pages"))
server.use(mw);
server.use("/api",router);


page.get('/register', (req, res) => {
    res.send(`
        <form action="/register" method="POST">
            <input type="text" name="userId" placeholder="User ID" required /><br>
            <input type="password" name="password" placeholder="Password" required /><br>
            <button type="submit">Register</button>
        </form>
    `);
});

connect().then(
server.listen(port,error => {
    if(error) return console.log(error);
    console.log(`server started on port ${port}`);
    
    
}))