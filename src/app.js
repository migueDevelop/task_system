//Modules
import express from "express";
import indexRoutes from "./routes/index.routes";
import path from "path";
import { create } from "express-handlebars";
import morgan from "morgan";

const app = express();

//Settings
app.set("views", path.join(__dirname, "views")); // we tell the aplication where is the 'views' file.

//View engine configuration
const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),//we tell where is the 'layouts' file
  partialsDir: path.join(app.get("views"), "partials"),//we tell where is the 'partials' file
  defaultLayout: "main",
  extname: ".hbs",
}); //we tell the view engine that we will be using '.hbs' extensions instead of html
app.engine(".hbs", exphbs.engine);
//we tell express to use the '.hbs' config we created
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//we tell the app to convert the post request into a json.

//Routes
app.use(indexRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;