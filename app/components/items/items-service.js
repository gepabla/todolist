'use strict';

angular.module('myApp.items.service', [])

.service('itemsService',function() {
  var items = [
               {remove: false, type:"GROCERIES",description:"Buy Milk",isDone:true},
               {remove: false, type:"CAR",description:"Wash Car",isDone:false},
               {remove: false, type:"UNIVERSITY",description:"Proy 3 To Do List Homework",isDone:false},
               {remove: false, type:"PAYMENTS",description:"Pay Cenfotec",isDone:false},
               {remove: false, type:"PAYMENTS",description:"Pay PSN Plus",isDone:false}               
              ];
  
  this.getItems = function(){
	  return items;
  };

  this.saveItem = function(item){
    items.push(item);
  }

  this.deleteItem = function(itemsToRemove){
    for(var i=0; i< itemsToRemove.length; i++){
      var index = items.indexOf(itemsToRemove[i]);
      items.splice(index, 1);    
    }     
  }
  
});
