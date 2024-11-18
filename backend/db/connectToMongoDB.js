import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB was Connected Successfully");
  } catch (error) {
    console.log("Error connecting to MangoDB ", error.message);
  }
};

export default connectToMongoDB;
