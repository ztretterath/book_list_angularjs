// Set up for express and path
var express = require('express');
var app     = express();
var path    = require('path');
var port    = provess.env.PORT || 4000

app.use(express.static(path.join(__dirname, 'public')));

// Set index view
app.get('/', function(request, response){
  response.render('index');
})

// rails will run on 3000
app.listen(port, function(){
  console.log('At your service on ==>', port);
})
