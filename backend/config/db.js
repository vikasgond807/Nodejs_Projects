
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://vikasgond807:Vikas@8451@cluster0.3cssbz1.mongodb.net/vikas?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose =require('mongoose')

const connectDB =async ()=>{
    try{
        const conn=await  mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
        
        console.log(`Mongoose Connected: ${conn.connection.host}`);
    }

    catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports=connectDB