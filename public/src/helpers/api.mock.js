const _applications = [
   {
     "id": "7j8bodt9uj8bodt9vj8",
     "company": "Bendy",
     "vacancy": "Ruby on rails Developer",
     "type": "Remote / Telecommute",
     "medium": "Workable",
     "date": "2017-10-03",
     "status": "Pending"
   },
   {
     "id": "6j8bpz4bpj8bpz4bqj8",
     "company": "The New Relic",
     "vacancy": "Web Developer",
     "type": "On Site",
     "medium": "Email",
     "date": "2017-10-03",
     "status": "Pending"
   },
   {
     "id": "7j8bqktwdj8bqktwej8",
     "company": "The Style Network",
     "vacancy": "Web Developer",
     "type": "Remote / Telecommute",
     "medium": "Paper",
     "date": "2017-10-03",
     "status": "Get Back to you"
   },
   {
     "id": "6j8bqlyvvj8bqlyvwj8",
     "company": "The StyLo",
     "vacancy": "Web Developer",
     "type": "Remote / Telecommute",
     "medium": "Paper",
     "date": "2017-10-03",
     "status": "Get Back to you"
   }
 ];

 export default {
    getApplications (cb) {
       setTimeout(() => cb(_applications), 100);
    }
 }