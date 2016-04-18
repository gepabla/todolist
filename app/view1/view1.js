'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','itemsService',function($scope,itemsService) {

	$scope.init = function(){
		$scope.showFlashMessage = false;
	};

	$scope.items = itemsService.getItems();
	$scope.classMap = {GROCERIES:"success",CAR:"danger",UNIVERSITY:"warning",PAYMENTS:"info"};
	$scope.showForm = false;
	$scope.showFlashMessage = false;
	$scope.todoName = "";
	$scope.category = "";
	$scope.itemsToDelete = [];

	$scope.add = function(){
		$scope.showForm = true;
	};

	$scope.save = function(){
        $scope.showForm = false;
        var item = {type:this.category,description:this.todoName,isDone:false};
        itemsService.saveItem(item);
	};

	$scope.delete = function(){
		var itemsRemoved = 0
	    for(var i=0; i< $scope.items.length; i++){
	    	if($scope.items[i].remove === true){
	    		$scope.itemsToDelete.push($scope.items[i]); 
	    	}

	    }
	    if($scope.itemsToDelete.length > 0){
	    	itemsService.deleteItem($scope.itemsToDelete);
	    } else {
	    	alert("No se seleccionaron items");
	    }
	};

}]);
