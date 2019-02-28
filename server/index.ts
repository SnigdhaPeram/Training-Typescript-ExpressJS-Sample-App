import * as express from "express";
import { userRoutes } from "./routes/user-route";


import * as bodyParser from "body-parser";
const { PORT } = require("./server-port");
const app = express();

 //require to allow other port numer to make http calls
app.use((req: any, res: any, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

 //body parser will help to read the body from request message and put it in express request body object.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
userRoutes(app);
app
  .get("/", (req: any, res: any) =>
    res.send(`Node and express server is running on port ${PORT}`)
  )
  .listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
