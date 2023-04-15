import mongoose from "mongoose";

const dbConnection = async (req, res) => {

    try {
        await mongoose.connect('mongodb+srv://tuanyh11:tuanyh11@cluster0.nifqa.mongodb.net/chaka')
        console.log("connect to MongoDB is successful")
    } catch (error) {
        console.log(`Couldn't connect to MongoDB with error: ${error}`);
    }
}

export default dbConnection;