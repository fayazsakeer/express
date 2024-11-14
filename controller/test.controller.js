import testModel from "../model/test.model.js";

export function abcd (req,res){
    res.status(400).send ("Test");
}
export async function write(req,res) {
    try {
        let {name,email} = req.body;
        let result = await testModel.create({name, email});
        console.log(result);
        res.status(200).json({msg : "Record created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "failed to create record"})
    }
}