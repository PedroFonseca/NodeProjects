var express = require("express");
var app = express();

app.use(express.static('./.tmp'));
app.get('/', function(req, res){
    res.render('./../app/index.ejs', {})
});

app.listen(7777);