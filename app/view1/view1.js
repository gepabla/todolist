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

	$scope.add = function(){
		$scope.showForm = true;
	};

	$scope.save = function(){
        $scope.showForm = false;
        var item = {type:this.category,description:this.todoName,isDone:false};
        itemsService.saveItem(item);
	};



}]);