import app from "./app.js";
import "./database";
import {PORT} from './config'

//Initialize server
app.listen(PORT);
console.log("Server on port:", PORT );