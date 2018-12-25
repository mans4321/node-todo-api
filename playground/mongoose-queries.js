const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var todoID = "5c0d3957e8303c189c61d21d";
var userID = "5c0cfcec481b08c03e445f56";

if (!ObjectID.isValid(todoID)) {
  return console.log("ID is not vaild");
}

if (!ObjectID.isValid(userID)) {
  return console.log("ID is not vaild");
}

Todo.findById(todoID)
  .then(todo => {
    if (!todo) {
      return console.log("couldn't find id");
    }
    console.log("Todos", todo);
  })
  .catch(e => console.log(e));

User.findById(userID)
  .then(todo => {
    if (!todo) {
      return console.log("couldn't find id");
    }
    console.log("Todos", JSON.stringify(2, undefined, todo));
  })
  .catch(e => console.log(e));
