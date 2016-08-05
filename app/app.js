(function () {
	"use strict";

	angular.module("app", [])
	.controller("Todo", Todo)
	.value("model", {
		user:"Vitalii",
		userPhoto: "images/VZ.jpg",
				items: [
					{action: "Estimate...", "done": false},
					{action: "Createe...", "done": false},
					{action: "Edit...", "done": false},
					{action: "Delete...", "done": false},
					]
				});

	function Todo($scope, model){
	    $scope.todo = model;
		console.log($scope.todo);
	}
})();