var express=require('express')
var app=express();

app.set("view engine","ejs");

app.use("/public",express.static(__dirname + "/public"));

app.use(express.static('public'));

app.get("/",function(req,res){
    res.render("index");
});

app.get("/aboutme",function(req,res){
    res.render("index2");
});

let port = process.env.PORT || 8080;

app.listen(port);