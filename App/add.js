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

async function add(db, collectionName) 
{
    const collection = db.collection(collectionName);
    for (i = 0; i < 3; i++)
    {
      let item = new items(i+1, "test"+(i+""), 400, 67);
      try
      {
        await collection.insertOne({id: item.id, name: item.name, description: item.description, price:item.price, units:item.units});
        console.log("added item #"+i);
      }
      catch(error)
      {
        console.log("error adding items to collection: ", error);
        throw error;
      }
    }
}
module.exports = add