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
  // const collection = db.collection('hats');
  console.log(`Connected. Attempting to add index...`);
  const indexOne =  { category: 1 , price: -1 };


  db.collection(databaseName).createIndex( indexOne , (err, results ) =>{
    if (err ) {
      console.log('An error occurred!', err);
      client.close();
      return;
    }

    console.log('Success!!');
    client.close();
    console.log('Database connection closed..');
  })
})

// 2.7
// db.hats.explain('executionStats').aggregate([ {$group: { _id: '$category', count:{$sum:1} } } ])
// 2.8
// db.hats.explain('executionStats').aggregate([{ $match: { category : "metal" } }, { $sort: { price: -1 }}, { $limit: 5 } ])
// 2.9
// db.hats.explain('executionStats').aggregate([ { $sort: { name: 1 }}, {$skip: 19 } , { $limit: 1 } ])
