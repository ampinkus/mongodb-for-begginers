// Agregations 
var pipeline = [ // to work you need to enter the variable wiith control + enter
    {$sort:{storeLocation:1}}, // sort on store location
    {$limit: 200},  // return a number of documents
    {$match:{"storeLocation":"London"}}
    ]

db.sales.aggregate(pipeline)