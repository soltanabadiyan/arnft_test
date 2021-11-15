var express = require("express");
var fs = require('fs');
var sys = require('sys');
const PORT = process.env.PORT || 5000
var app = express();
    app.set("view options", {layout: false});
    app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(PORT);
console.log('Express server started');