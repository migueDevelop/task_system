import mongoose from "mongoose";
import { MONGODB_URI } from "./config";
//We connect to a database name 'crud-mongo'
//We use an immediately invoke async function to execute the program and use await.
(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
