// Set up for express and path
var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Set index view
app.get('/', function(request, response){
  response.render('index');
})

// rails will run on 3000
app.listen(4000, function(){
  console.log('LISTENING ON 4000');
})
