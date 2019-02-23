const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//Add Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

//Delete Posts
router.delete('/:id', async(req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://abc123:qwerty123@cluster0-shard-00-00-j6ala.mongodb.net:27017,cluster0-shard-00-01-j6ala.mongodb.net:27017,cluster0-shard-00-02-j6ala.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {
        useNewUrlParser: true
    })

    return client.db("test").collection("posts");
}

module.exports = router;

//cluster0-shard-00-00-j6ala.mongodb.net:27017
//'mongodb://localhost:27017/myproject' <- works for local