var pool = require('./connection')
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req, res){
    res.sendFile(__dirname+'/SingUp.html')
    
});


app.post('/',function(req,res){
  var name = req.body.name;
  var password = req.body.password;

  pool.connect(function(error){
    if (error) throw error;              //this is the connection of the database 
    console.log("Connection Done to database");

    var sql= "INSERT INTO userlogin(name, password) values('"+name+"','"+password+"')";

    pool.query(sql,function(error, result){
        res.send("Login Succesfull ");


    });
  });

});


app.listen(7000,function(err,result){
    if(err) throw err;
    console.log("Server Started");
});