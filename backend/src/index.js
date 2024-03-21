import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log(`server is running at port: 3000`);
    });
  })
  .catch((er) => {
    console.log("error", er);
  });
