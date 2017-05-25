
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html'
    });
}])

.controller('View1Ctrl', ['$scope', '$log', '$location', function($scope, $log, $location) {

	// Feel free to cahnge all the code below


	$scope.pageName = 'LOGIN';

	//This is your predefined login details
	// User should enter this to go to second page
	var me = {
		email: 'abc@gmail.com',
		password: '123'
	};

	// This is the model for the Input fields
	// Use ng-model in html to connect Input fields to this model
	$scope.formModel = {
		emailInput: '',
		passwordInput: ''
	};

	$scope.wrongIp = true;

	var goToPage2 = function() {
       $location.path('/view2'); 
    };

	$scope.submit = function () {
		if ((me.email===$scope.formModel.emailInput)&&(me.password===$scope.formModel.passwordInput))
		{
			goToPage2();
		} else {
			$scope.wrongIp = false;
			// show error msg
			// use ng-if and a flag variable to show hide error message
		}
	};

}]);