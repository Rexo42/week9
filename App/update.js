async function update(db, id)
{
    collection = db.collection("products");
    const filter = {id: id};

    const updateProduct = {
        $set: {
            price: 200,
            units: 150,
        }
    }
    try
    {
        await collection.updateOne(filter, updateProduct);
        console.log("updated item successfully");
    }
    catch(error)
    {
        console.error("error updating item: ", error);
    }
}

module.exports = update;