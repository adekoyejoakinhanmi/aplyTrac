```json
User = {
   id : ObjectId,
   username: String,
   password : password,
   applications : [
      {
         company: String,
         type : String,
         vacancy : String,
         medium : String,
         status : String,
         date : Date,
         id : ObjectId,
         flags : [
            {
               description : String,
               completed : Boolean,
               dueDate : Date
            }
         ]
      }
   ],
   settings : {

   },
   archive : [
      applications
   ]
}
```