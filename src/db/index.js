import mongoose from "mongoose";
import {DB_NAME} from '../constant.js';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
        console.log('MongoDB Is Connected!');
    } catch (error) {
        console.log('Error While Connecting with MongoDB database', error);
        process.exit(1);
    }
}
export default connectDB;
