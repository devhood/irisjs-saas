var config = {
  "sitePath": "/configurations", // this is where your configuration and templates will go 
  "port": 8080, // the port the site will run on
  "https": false, // using SSL?
  "https_key": "", // see above
  "https_cert": "", // see above
  "db_server": "localhost", // where is the MongoDB database running?
  "db_port": 27017, // which port is the database running on?
  "db_name": "irisjs_rocks1", // what do you want the database name to be?
}

require("irisjs")(config);