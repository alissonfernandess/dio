import { config } from "../config/constants";
import mongoose from "mongoose";

export class MongoConnection {
  public async connect() {
    try {
      await mongoose.connect(config.MONGO_CONNECTION);
      console.log('Database connected');
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  }
}