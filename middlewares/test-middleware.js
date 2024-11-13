export default function mw(req,res,next){
    let id = req.query.id;
    if(id > 10){
        return res.send("Log from middle ware")
    }
    next();
}