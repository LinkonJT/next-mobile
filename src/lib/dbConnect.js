import { MongoClient, ServerApiVersion } from ('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3h4lqut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

export default async function dbConnect(collectionName){
// Check if the client is already connected to the database
  if(!client.topology?.isConnected()){
    await client.connect() //// If not, establish a connection to the database
  }

return client.db(process.env.DB_NAME).collection(collectionName)   // Return the specified collection from the selected database
}
