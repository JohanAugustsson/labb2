const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const options = {useNewUrlParser: true};
const databaseName = 'hats';
// const numDocs = 20000;

console.log("Attempting to connect to MongoDb.");
MongoClient.connect(url, options, (err, client) => {
  if( err ){
    console.log('An error occurred!', err);
    return;
  }

  const db = client.db(databaseName);
  console.log(`Connected. Attempting to remove index...`);

  db.collection(databaseName).dropIndexes( (err, results ) => {
    if (err ) {
      console.log('An error occurred!', err);
      client.close();
      return;
    }
    console.log('Success.. indexes removed!');
    client.close();
    console.log('db connection closed!');
    return;
  })
})
