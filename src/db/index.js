import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import { Admin } from '../models/admin.model.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n Mongodb connected ! DB Host : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MONGODB connection Failed: ' + error);
    process.exit(1);
  }
};

export default connectDB;
