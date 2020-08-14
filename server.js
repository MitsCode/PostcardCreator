 // server.js
// where your node app starts
// init project

const express = require('express');
const app = express();
const assets = require('./assets');
const fs = require('fs');

const bodyParser = require("body-parser");
const sql = require("sqlite3").verbose();

const shopDB = new sql.Database("shoppingList.db");

app.use(express.json());
// Multer is a module to read and handle FormData objects, on the server side
const multer = require('multer');

// Make a "storage" object that explains to multer where to store the images...in /images
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/images')    
  },
  // keep the file's original name
  // the default behavior is to make up a random string
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

// Use that storage object we just made to make a multer object that knows how to 
// parse FormData objects and store the files they contain
let uploadMulter = multer({storage: storage});

// First, server any static file requests
app.use(express.static('public'));

// Next, serve any images out of the /images directory
app.use("/images",express.static('images'));

// Next, serve images out of /assets (we don't need this, but we might in the future)
app.use("/assets", assets);

// Next, if no path is given, assume we will look at the postcard creation page
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});


// Next, handle post request to upload an image
// by calling the "single" method of the object uploadMulter that we made above
app.post('/upload', uploadMulter.single('newImage'), function (request, response) {
  // file is automatically stored in /images
  // WARNING!  Even though Glitch is storing the file, it won't show up 
  // when you look at the /images directory when browsing your project
  // until later (or unless you open the console (Tools->Terminal) and type "refresh").  
  // So sorry. 
  console.log("Recieved",request.file.originalname,request.file.size,"bytes")
  // the file object "request.file" is truthy if the file exists
  if(request.file) {
    // Always send HTTP response back to the browser.  In this case it's just a quick note. 
    response.end("Server recieved "+request.file.originalname);
  }
  else throw 'error';
})

let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='ShopTable' ";
shopDB.get(cmd, function (err, val) {
    console.log(err, val);
    if (val == undefined) {
        console.log("No database file - creating one");
        createGrandmasDB();
    } else {
        console.log("Database file found");
        
    }
});

function createGrandmasDB() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  const cmd = 'CREATE TABLE ShopTable ( rowIdNum INTEGER PRIMARY KEY, listItem TEXT, listAmount TEXT, randString TEXT, picture TEXT, font TEXT)';
  shopDB.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
    } else {
      console.log("Created database");
    }
  });
}

app.post('/sharePostcard', function (request, response){

  let item = request.body.message;
  let amount = request.body.color;
  let letters = request.body.randomString;
  let font1 = request.body.font;
  let picture1 = request.body.picture;
  
  cmd = "INSERT INTO ShopTable ( listItem, listAmount, randString, picture, font) VALUES (?,?,?,?,?) ";
    shopDB.run(cmd,item,amount,letters, picture1, font1, function(err) {
  });
  
});

app.get('/sharePostcard' , function (request, response) {
  fs.readFile('postcardData.json', (err, data) => { 
  }) 
  
  let xcmd = 'SELECT * FROM ShopTable WHERE randString =';
  let quotes = ' "' + request.query.Id + '"';
  let adsf = xcmd + quotes;
  
  shopDB.all( adsf, [], (err, rowData) => { 
    response.send(rowData);
  });
 
  
});

// listen for HTTP requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


