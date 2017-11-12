var express = require("express");

var app = express();

var students = [{name:"sachin",age:24},
{name:"virat",age:40}]



app.get("/",function(req,res){
      res.send("hello");
})

app.get("/search",function(req,res){
   var name = req.query.name;
   for(var i=0;i<students.length;i++){
    if(name == students[i].name)  {
        res.send(students[i])
        
    } 
   }

})


app.get("/mail",function(req,res){
    var params = req.query
    console.log(params)
    res.send("hello "+params.name);
})


app.listen(8888,function(){
    console.log("server started");
})