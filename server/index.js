const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("mongodb");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;
const client = new mongodb.MongoClient(process.env.URI);
const collection = client.db("axios-test").collection("products");
try {
  (() => {
    // iife: immediately invoked function expression
    app.get("/", (req, res) => {
      res.send("Data is comming");
    });

    app.get("/get", async (req, res) => {
      const cursor = collection.find({});
      const data = await cursor.toArray();
      res.send(data);
    });
    app.post("/post", async (req, res) => {
      const doc = req.body;
      console.log(doc);
      const result = await collection.insertOne(doc);
      res.send(result.insertedId);
    });
    app.delete("/delete", async (req, res) => {
      await collection.deleteMany({});
      res.send("deleted all");
    });
    app.get("/:_id", async (req, res) => {
      const result = await collection.findOne({
        _id: mongodb.ObjectId(req.params._id),
      });
      res.send(result);
    });
  })();
} catch (error) {
  console.log("🚀 > error", error);
}

app.listen(port, () => console.log(`App listening on port ${port}!`));
