const { MongoClient, ServerApiVersion } = require("mongodb")

let db;

const connectionDB=async()=>{
    if(db)
    {
        return db
    }
    try{
        const mongo_URL=`mongodb+srv://foodrunner:rsOz1DW39eDLNbTf@cluster0.il352b3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        const client = new MongoClient(mongo_URL, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            },
          });
          db=client.db('userDB')
          console.log("connection to mongodb server")
    }
    catch(err){
        console.log(err)
    }
}
export default connectionDB;