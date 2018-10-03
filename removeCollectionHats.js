const MongoClient = require('mongodb').MongoClient;
const { getHatList } = require('./generateData.js');
const url = 'mongodb://127.0.0.1:27017';
const options = {useNewUrlParser: true};
const databaseName = 'hats';
const nameCollection = 'hats';

console.log("Attempting to connect to MongoDb.");
MongoClient.connect(url, options, (err, client) => {
  if( err ){
    console.log('An error occurred!', err);
    return;
  }
  console.log("Connected to MongoDb.");
  const db = client.db(databaseName);
  const collection = db.collection(nameCollection);
  try {
    collection.deleteMany();
  } catch (e) {
    console.log('An error occured during delete of collection! Error msg: ', e);
    client.close();
    return;
  }
  console.log(`Collection ${nameCollection} is removed!`);
  client.close();
})
