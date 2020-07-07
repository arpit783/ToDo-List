const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

var array = ["Buy food", "cook food", "eat food"];
var workList = [];

app.get("/", function(req, res) {

  day = date.getDate();
  res.render("list", {
    typeOfList: day,
    listItems: array,
  });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  if(req.body.add === "Work List"){
    workList.push(item);
    res.redirect("/work");
  }else{
    array.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {typeOfList: "Work List", listItems: workList});
});

app.listen("3000", function() {
  console.log("Your server is running at port 3000")
});
