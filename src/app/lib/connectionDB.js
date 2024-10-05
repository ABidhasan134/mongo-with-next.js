import { MongoClient, ServerApiVersion } from "mongodb";

let db;
const connectDB = async () => {
  if (db) {
    return db;
  }
  
  try {
    // console.log(process.env.NEXT_PUBLIC_MONGO_URL);
    const uri = process.env.NEXT_PUBLIC_MONGO_URL;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // await client.connect(); // Make sure to connect to the database
    db = client.db("userDB");
    console.log(db)
    return db; // Return the connected db object
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
    throw err; // Propagate the error for proper handling
  }
};

export default connectDB;
