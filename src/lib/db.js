import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env file

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("❌ MONGODB_URI is not defined in .env file");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;





// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try{
//        const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`MongoDB connected : ${conn.connection.host}`);
//     }catch(error){
//       console.log("MongoDB connection error:" ,error);
//     }

// };