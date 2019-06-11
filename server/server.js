const express = require('express');
const path = require('path');
const app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, '../build')));

const getData =  require('./controllers/getData_controller');
app.post('/getData', getData);

app.get('/*', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(5000, function(){
  console.warn('Server started from port 5000');
});
