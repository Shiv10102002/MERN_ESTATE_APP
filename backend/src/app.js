import express from "express";
const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

import userRouter from "./routes/auth.route.js";

app.use("/api/v1/auth", userRouter);
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statuscode).json({
    success: false,
    statuscode,
    message,
  });
});
export { app };
