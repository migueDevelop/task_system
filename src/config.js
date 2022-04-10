import { config } from "dotenv"; //Allow us to read the '.env' file.

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/test";
export const PORT = process.env.PORT || 5000;
// if the conection we are trying doesnt exist then conect to the other conection for that condition we use '||'.
