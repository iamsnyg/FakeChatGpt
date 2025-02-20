import mongoose from 'mongoose';



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log(`MongoDB Connected: ${process.env.MONGO_URI}`))
        .catch(err => console.log(err));
        
        // console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    };

export default connectDB;