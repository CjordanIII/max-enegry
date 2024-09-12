"use server";
import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const connectMongo = async () => {
  if (isConnected) {
    console.log("already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin", // Optional, depending on your auth setup
      user: process.env.MONGO_INITDB_ROOT_USERNAME || "root",
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD || "password",
    });

    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectMongo;
