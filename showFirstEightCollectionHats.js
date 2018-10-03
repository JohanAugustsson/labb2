const MongoClient = require('mongodb').MongoClient;
const { getHatList } = require('./generateData.js');
const url = 'mongodb://127.0.0.1:27017';
const options = {useNewUrlParser: true};
const databaseName = 'hats';
const nameCollection = 'hats';
const numLimit = 8;

console.log("Attempting to connect to MongoDb.");
MongoClient.connect(url, options, (err, client) => {
  if( err ){
    console.log('An error occurred!', err);
    return;
  }
  console.log("Connected to MongoDb.");
  const db = client.db(databaseName);
  const collection = db.collection(nameCollection);
  let dataToReturn;
  try {
      collection.find().limit(numLimit).toArray(function(err, docs) {
        if ( err ) {
          client.close()
          return;
        }
    		console.log(`Found first ${numLimit} number of docs:`);
    		console.log(docs)
        client.close()
	    });

  } catch (e) {
    console.log('An error occured during delete of collection! Error msg: ', e);
    client.close();
    return;
  }
})
