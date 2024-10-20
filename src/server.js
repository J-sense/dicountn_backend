import mongoose from "mongoose";
import app from "./app.js";

const port = process.env.PORT || 8000; // Using environment variable for the port

const main = async () => {
  try {
    // Connecting to the MongoDB database
    await mongoose.connect("mongodb://localhost:27017/hotelmanagement", {
     // Options to avoid deprecation warnings
    });
    
    console.log("Connected to MongoDB");

    // Starting the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

main();
