'use strict';

angular.module('myApp.items.service', [])

.service('itemsService',function() {
  var items = [
               {type:"GROCERIES",description:"Buy Milk",isDone:true},
               {type:"CAR",description:"Wash Car",isDone:false},
               {type:"UNIVERSITY",description:"Proy 3 To Do List Homework",isDone:false},
               {type:"PAYMENTS",description:"Pay Cenfotec",isDone:false},
               {type:"PAYMENTS",description:"Pay PSN Plus",isDone:false}               
              ];
  
  this.getItems = function(){
	  return items;
  };

  this.saveItem = function(item){
    items.push(item);
  }
  
});
