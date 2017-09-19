const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017/aplyTrac';
const APPLICATION_COLLECTION = 'applications';
const USER_COLLECTION = 'users';
const ObjectID = mongodb.ObjectID;
let db;

/* Configuration */
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));


/* Connect to DB */
mongodb.MongoClient.connect(MONGODB_URI, (err, database) => {
   if (err) throw err;

   db = database;
   console.log("Database Connection is ready");
      
   app.listen(port, () => {
      console.log(`Things are happening on ${port}`);
   });
});


/* Routes */

// Error Handler
function handleError(res, reason, message, code) {
   console.log(`ERROR: ${reason}`);
   res.status(code || 500).json({
      "error" : message
   });
}

/* 
   Application Schema = 
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
   
   db.collection(APPLICATION_COLLECTION).insertOne(body, (err, doc) => {
      if (err) {
         handleError(res, err.message, "Failed to create new applicaion.");
       } else {
         res.status(201).json(doc.ops[0]);
       }
   })
});

/* "/api/applications/:id"
 *    DELETE: deletes a job applications by id
 *    PUT : updates a job application by id
*/
app.delete("/api/applications/:id", (req, res) => {
   db.collection(APPLICATION_COLLECTION).deleteOne({
      _id : new ObjectID(req.params.id)
   }, (err, result) => {
      if (err) handleError(res, err.message, "Failed to delete application");
      res.status(200).json(req.params.id);
   });
});

app.put("/api/applications/:id", (req, res) => {
   let updateData = req.body;
   delete updateData._id;

   db.collection(APPLICATION_COLLECTION).updateOne({
      _id : new ObjectID(req.params.id)
   }, {$set : updateData}, (err, result) => {
      if (err) handleError(res, err.message, "Failed to update contact");
      updateData._id = req.params.id;
      res.status(200).json(updateData);
   });
});

app.get('/', (req, res) => {
   res.sendFile('/public/index.html');
});