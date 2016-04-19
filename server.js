
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
   //res.sendFile( __dirname + "/" + "index.html" );
   res.sendFile( __dirname + "/" + "index.html" );    
})

// app.get("/styles-normalize.css", function (req, res) {
//       res.sendFile( __dirname + "/" + "styles/normalize.css" );    
// })


app.get( "/collection.html" , function (req, res) {
      res.sendFile( __dirname + "/" + "collection.html" );    
})

app.get( "/album.html" , function (req, res) {
      res.sendFile( __dirname + "/" + "album.html" );    
})

//var server = app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
var server = app.listen(process.env.PORT || 8080 , function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
  
  
  
  
  

})

























