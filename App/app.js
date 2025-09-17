// npm install mongodb
class items
{
  constructor(id, name, description, price, units)
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.units = units;
  }
}

const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let db = null;

const add = require('./add');
const read = require('./read');
const remove = require('./remove');
const update = require('./update');

async function connect()
{
  if (!db)
  {
    try
    {
      await client.connect();
      db = client.db('mydb');
      console.log('Connected to DB Successfully');
      setup();
    }
    catch (error)
    {
      console.error("failed to connect to database: ", error);
      throw error;
    }
  }
  return db;
}

async function setup()
{
  const collectionName = 'products';
  try
  {
    const collections = await db.listCollections({name: collectionName}).toArray();
    if (collections.length === 0)
    {
      await db.createCollection(collectionName);
      console.log("created collection successfully");
    }
    else
    {
      console.log("collection with name already exists");
    }

    // await add(db, collectionName);
    // await read(db);

    // await update(db, 1);
    // await read(db);

    // await remove(db);
    // await read(db);
    console.log("database setup successfully complete...");
    return db;
  }
  catch(error)
  {
    console.error("failed to setup database: ", error);
    throw(error);
  }


}


//connect();
module.exports = {connect};