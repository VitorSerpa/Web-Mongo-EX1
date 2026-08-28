import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

import "dotenv/config";
import mongoose from "mongoose";

export async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB conectado!");
    console.log("ReadyState:", mongoose.connection.readyState);
  } catch (error) {
    console.error("Erro ao conectar:", error);
    throw error;
  }
}