import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    }
})
export default mongoose.model.Tests || mongoose.model("test",schema)