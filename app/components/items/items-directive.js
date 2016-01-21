'use strict';

angular.module('myApp.items.directive', [])

.directive('itemSwitch', [function() {
	return {
        restrict: 'A',
        scope: {
            item: '=',
            itemIndex: "="
        },
        templateUrl: 'templates/itemSwitchTemplate.html',
        link:function($scope){
        		console.log("directive $scope",$scope)
        		$scope.editeme = function(item){
        			console.log("ahora si editeme",item);
        			$scope.$emit("EDIT_CHANNEL",item);
        		}
        }
    }
}]);
