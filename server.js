import express from "express";
import cors from "cors";
import mailRoute from "./routes/mailRoute.js"

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use("/mail", mailRoute);

//run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
