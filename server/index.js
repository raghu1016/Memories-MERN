import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Raghu_Memories:raghu1016@clustermemories.ieh3tkm.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

async function connectToMongo() {
  try {
    await mongoose.connect(CONNECTION_URL, {});
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
    //  Additional code you want to execute after successful connection
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle error
  }
}
connectToMongo();

app.use("/posts", postRoutes);
// mongoose.set("useFindAndModify", false);
