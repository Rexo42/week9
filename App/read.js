async function read(app,db)
{
    app.get('/read', async (req, res) =>{
        try
        {
            collection = db.collection("products");
            const docs = await collection.find().toArray();
            res.json(docs);
        }
        catch(error)
        {
            res.status(500).json({error: 'Failed to read products from database'});
        }
    });
}
module.exports = read;