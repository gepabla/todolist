'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })  
}])

.controller('View1Ctrl', ['$scope','itemsService',function($scope,itemsService) {
	$scope.onEditing = false;
	$scope.items = itemsService.getItems();
	$scope.classMap = {GROCERIES:"success",CAR:"danger",UNIVERSITY:"warning",PAYMENTS:"info"};
	
	$scope.init = function(){
		console.log("$scope del View1Ctrl",$scope)
	}
	
	$scope.$on("EDIT_CHANNEL",function(event,obj){
		console.log("lo logreeeeeeeeeeee",obj)
		$scope.onEditing = true;
	});
	
	$scope.init();
}]);