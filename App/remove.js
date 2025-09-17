async function remove(db)
{
    try
    {
        collection = db.collection("products");
        await collection.deleteMany({});
        console.log("items removed successfully");
    }
    catch(error)
    {
        console.error("error removing items: ", error);
        throw error;
    }
}

module.exports = remove;