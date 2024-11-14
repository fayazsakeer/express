import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
        console.log("connection successful");
    } catch (error) {
        console.log(error);
    }
}

export default connect;