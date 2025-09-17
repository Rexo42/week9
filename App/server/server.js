// npm install express, cors, body-parser, mongodb

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const {connect} = require ('../app');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI and client
//const uri = 'mongodb://localhost:27017';
//const client = new MongoClient(uri);
//let db;

// Connect to MongoDB and start the server
async function startServer() {
  try {
    //await client.connect();
    //db = client.db('mydb');
    //console.log('Connected to MongoDB');
    const db = await connect();

    // Import route handlers and pass db + ObjectId
    //const createRoutes = require('../create');
    const addRoutes = require('../add');
    const removeRoutes = require('../remove');
    const updateRoutes = require('../update');
    const readRoutes = require('../read');

    // Setup routes
    //createRoutes(app, db, ObjectId);
    //addRoutes(app, db, ObjectId);
    //removeRoutes(app, db, ObjectId);
    //updateRoutes(app, db, ObjectId);
    readRoutes(app, db);

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

startServer();