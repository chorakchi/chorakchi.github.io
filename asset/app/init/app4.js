(function() {
	var module = angular.module("app4", [
    "ngMaterial",
    "ngAnimate",
    "ngAria",
    "ngMessages",
    "mdPickers"
  ]); 
  
  module.controller("MainCtrl", ['$scope', '$mdpDatePicker', '$mdpTimePicker', function($scope, $mdpDatePicker, $mdpTimePicker){
    $scope.currentDate = new Date();
  	this.showDatePicker = function(ev) {
    	$mdpDatePicker($scope.currentDate, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentDate = selectedDate;
      });
    };
    
    this.filterDate = function(date) {
      return moment(date).jdate() % 2 == 0;
    }; 
    this.showTimePicker = function(ev) {
    	$mdpTimePicker($scope.currentTime, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentTime = selectedDate;
      });;
    }  
  }]);
})();