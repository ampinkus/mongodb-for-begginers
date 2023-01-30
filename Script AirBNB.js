db.getCollection("collection").find({"name":"Deluxe Loft Suite"})
db.getCollection("collection").find({"bathrooms":3})
db.getCollection("collection").find({"beds":2})
db.getCollection("collection").find({})
db.getCollection("collection").find({"bathrooms":1,"beds":4 })
db.getCollection("collection").find({"beds": {$lt: 2}})
db.getCollection("collection").find({"beds": {$gt: 10}}).pretty()
db.getCollection("collection").find({$and :[ {"bathrooms": 2},{"beds":{$gte:8}} ] })
db.getCollection("collection").find({$or :[ {"bathrooms": 2},{"beds":{$gte:8}} ] })
db.getCollection("collection").find({},{"name":1})
db.getCollection("collection").find({},{"name":0})
db.getCollection("collection").find({},{"name":1, "summary":1})
db.getCollection("collection").find({"beds":{$lte:4}},{"name":1, "summary":1, "beds":1})

// Agregations 
db.collection.aggregate([{$match:{"beds":4}}]) // mostrar todos los documentos con 4 camas
db.collection.aggregate([{$match:{"bedrooms":4}}])  // mostrar todos los documentos con 4 dormitorios
db.collection.aggregate([{$match:{"minimum_nights":1}}]) 
db.collection.aggregate([{$match:{"accommodates":4}}])
db.collection.aggregate([
{$sort:{cleaning_fee:1}}
])

var pipeline = [ // to work you need to enter the variable wiith control + enter
    {$sort:{bedrooms:1,beds:1}}, // sort on bedrooms and beds
    {$limit: 1000},  // return a number of documents
    {$project: {_id:1, name:1, summary:1, bedrooms:1, beds:1}} // show on the result the selected fields
    ]

db.collection.aggregate(pipeline)

// create an index on name
db.collection.createIndex({"name":1})

var pipeline = [ // to work you need to enter the variable wiith control + enter
    {$sort:{name:1}}, // sort on name after creating an index on name
    {$limit: 1000},  // return a number of documents
    {$project: {_id:1, name:1, summary:1, bedrooms:1, beds:1}} // show on the result the selected fields
    ]

db.collection.aggregate(pipeline)