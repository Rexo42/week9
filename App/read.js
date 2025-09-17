async function read(db)
{
    try
    {
        collection = db.collection("products");
        const docs = await collection.find().toArray();
        console.log("All documents:");
        docs.forEach(doc => console.log(doc));
    }
    catch(error)
    {
        console.error("error reading database: ",error);
        throw(error);
    }
}
module.exports = read;