const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;




app.use(cors());
app.use(express.json())

//  MONGODB DATABASE USER PASSWORD
// Rahman014
// AB38QQnLseLnJH22

// verify mongobduser
const uri = "mongodb+srv://rahman:12345@cluster0.nxhbkwn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const database = client.db("insertDB").collection("CatagoryData");
    const BookmarkData = client.db("insertDB").collection("Bookmark");
   
// show all catagory data
    app.get("/data",async (req,res)=>{
      const cursor = database.find();
      const result = await cursor.toArray();
      res.send(result);
    })
// post movie data
    app.post("/data", async (req,res) =>{
      const data= req.body;
      console.log(data);
      const result = await database.insertOne(data);
      res.send(result);
    })
//Update Movie data
    app.put("/data/:id", async (req,res) =>{
      const id= req.params.id
      const filter = {_id:new ObjectId(id)}
      const options = { upsert: true };
      const UpdatedMovie = req.body;
      const MovieDetails = {
        $set: {
          name:UpdatedMovie.name,
          rate:UpdatedMovie.rate,
          videourl:UpdatedMovie.videourl,
          imgurl:UpdatedMovie.imgurl,
          relasedate:UpdatedMovie.relasedate,
          catagory:UpdatedMovie.catagory,
          Data:UpdatedMovie.Data
        },
      };
      const result = await database.updateOne(filter,MovieDetails,options)
      res.send(result)
    })
//delete Movie data
    app.delete("/data/:id", async (req,res) =>{
      const id= req.params.id
      const query = {_id:new ObjectId(id)}
      const result = await database.deleteOne(query)
      res.send(result)
    })

    // show all bookmark data
    app.get("/bookmark",async (req,res)=>{
      const cursor = BookmarkData.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    // Add bookmark data
    app.post("/bookmark", async (req,res) =>{
      const data= req.body;
      console.log(data);
      const result = await BookmarkData.insertOne(data);
      res.send(result);
    })
    //delete Movie data
    app.delete("/bookmark/:id", async (req,res) =>{
      const id= req.params.id
      const query = {_id:new ObjectId(id)}
      const result = await BookmarkData.deleteOne(query)
      res.send(result)
    })

//

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

app.get("/", (req, res) => {
  res.send("Crud is running...");
});


app.listen(port, () => {
  console.log(`Simple Crud is Running on port ${port}`);
});

run().catch(console.dir);