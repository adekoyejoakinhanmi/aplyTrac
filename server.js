const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const Schema = mongoose.Schema;
const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017/aplyTrac';
const JOBS_COLLECTION = 'applications';
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
mongoose.connect(MONGODB_URI, {
   useMongoClient : true
});

// Data Schema
const Application = new Schema({
   companyName : String,
   jobVacancy : String, 
   jobType : String,
   applicationMedium : String,
   applicationStatus : String,
   applicationDate : {
      type : Date,
      default : Date.now
   }
});

const ApplicationModel = mongoose.model('Application', Application);

// API ROUTES

// Generic Error handler for all end points
function handleError(res, reason, message, code) {
   console.log(`ERROR: ${reason}`);
   res.status(code || 500).json({
      "error" : message
   });
}

/* "/api/applications"
 *    GET: Finds all job applications
 *    POST : Creates a new job application
*/
app.get('/api/applications', (req, res) => {
   ApplicationModel.find((err, applications) => {
      if (err) handleError(res, err.message, "Failed to get applications");
      res.status(200).json(applications);
   })
});

app.post('/api/applications', (req, res) => {
   var body = req.body;
   // We need to perform Validation here as well
   // but for now we will assume correct data is 
   // comming in
   if (!req.body.companyName) {
      handleError(res, "Invalide user input", "Must provide company name", 400);
   }
   let newApplication = new ApplicationModel(body);
   newApplication.save((err) => {
      if (err) {
         handleError(res, err.message, "Failed to create new application.");
      }
   });
});

// START

app.listen(port, () => {
   console.log(`Things are happening on ${port}`);
});