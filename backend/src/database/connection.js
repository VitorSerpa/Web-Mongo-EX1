import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function run() {
  await client.connect();

  await client.db("admin").command({ ping: 1 });

  console.log("MongoDB conectado!");

  return client;
}