const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// user: mydbuser1
// pass: yzBcyY0VW78LHcRW

//middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
//Use user and password here
const uri = "mongodb+srv://mydbuser1:yzBcyY0VW78LHcRW@cluster0.x5tdtyb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//inserting or writing in the database
async function run() {
  try {
    await client.connect();
    const database = client.db("newDB");
    const userCollection = database.collection("users");

    // POST API
    app.post('/users', async(req, res) =>{
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);

      console.log('got new user', newUser);
      console.log('added user', result);
      res.json(result);
    })

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello Honey! Running my CRUD Server!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})