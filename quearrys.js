{$group: { _id: null, count:{$sum:1} } }

totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
totalAmount: { $sum: { sum: "$price" } },
db.orders.aggregate([ { $match: { status: "A" } }, { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }, { $sort: { total: -1 } } ])





db.hats.aggregate([ {$group: { _id: null, count:{$sum:1} } } ])
db.hats.aggregate([ { $group: { _id: null, total: { $sum: "$price" } } } ])


db.hats.aggregate( [ { $sort : { price : -1, name: 1 } } ] )


db.hats.aggregate( [ { $sort : { name: 1 } }, { $limit: 3 } ] )


db.hats.aggregate([ { $group: { _id: null, max: { $max: "$price" }, min: { $min: "$price" }, average: { $avg: "$price" } } } ])


{ $group: { _id: null, total: { $sum: "$price" } } }


db.hats.aggregate([ $sort: { "$price": { $gt: 49 } },{$group: { _id: null, count:{$sum:1} } } ])
db.hats.aggregate([ { average: { $avg: "$price" } } ])

db.hats.aggregate([ { $group: { _id: null, max: { $max: "$price" }, min: { $min: "$price" }, average: { $avg: "$price" } } } ])
db.hats.aggregate( [ { $sort : { price: { $gt: 49 } } } ] )

49.4

db.hats.aggregate( [ { $group: { item: 1, qty: 1, greater: { $gte: [ "$price", 49 ] }, _id: 0 } } ] )
db.hats.aggregate( [ { $gt: [ "$price", 49 ] } ] )

db.hats.aggregate([ { $match : { price: { $gte: 49.4 } } }, { $group: { _id: null, count: { $sum:1 } } }  ])

db.hats.aggregate([ {$group: { _id: null, count:{$sum:1} } } ]) // funkar
db.hats.aggregate([ {$group: { _id: '$category', count:{$sum:1} } } ]) // funkar

db.hats.aggregate([{ $match: { category : "metal" } }, { $sort: { price: -1 }}, { $limit: 5 } ])

db.hats.aggregate([ { $sort: { name: 1 }},{$skip: 19 } ,{ $limit: 1 } ])


db.hats.aggregate([{ $match: { category : "plastic" } }, { $group: { _id: '$category', total: { $sum: '$price' } } } ])

"Länk till google documents:"
"https://docs.google.com/document/d/1ZfdZYQpgDAYSoWYOe2YnQqU1RUfnXdN52eJ2diRZ13E/edit"
