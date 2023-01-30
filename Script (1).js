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
var pipeline = [  // we define a pipeline
    {$sort:{"name":1}}
];