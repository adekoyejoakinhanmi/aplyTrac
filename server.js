const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017/aplyTrac';
const APPLICATION_COLLECTION = 'applications';
let db;

// CONFIG
app.use(bodyParser.urlencoded({
   extended : true
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
   type : 'application/vnd.api+json'
}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));


// DATABASE
mongoClient.connect(MONGODB_URI, (err, database) => {
   if (err) throw err;

   db = database;
   console.log("Database Connection is ready");
      
   // START
   app.listen(port, () => {
      console.log(`Things are happening on ${port}`);
   });
});

// API ROUTES

// Generic Error handler for all end points
function handleError(res, reason, message, code) {
   console.log(`ERROR: ${reason}`);
   res.status(code || 500).json({
      "error" : message
   });
}

/* 
   Application Schema
    {
       "_id" : <ObjectId>,
       "companyName" : <String>,
       "jobVacancy" : <String>,
       "jobType" : <String>,
       "applicationMedium" : <String>,
       "applicationStatus" : <String>,
       "applicationDate" : <Date>
    }
*/
/* "/api/applications"
 *    GET: Finds all job applications
 *    POST : Creates a new job application
*/
app.get('/api/applications', (req, res) => {
   db.collection(APPLICATION_COLLECTION).find({}).toArray((err, docs) => {
      if (err) handleError(res, err.message, "Failed to get applications");
      res.status(200).json(docs);
   });
});

app.post('/api/applications', (req, res) => {
   var body = req.body;
   // We need to perform Validation here as well
   // but for now we will assume correct data is 
   // comming in
   
   db.collection(APPLICATION_COLLECTION).insertOne(newContact, (err, doc) => {
      f (err) {
         handleError(res, err.message, "Failed to create new applicaion.");
       } else {
         res.status(201).json(doc.ops[0]);
       }
   })
});