
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html'
    });
}])

.controller('View2Ctrl', ['$scope', '$log', '$location', function($scope, $log, $location) {

	// Feel free to cahnge all the code below

	$scope.pageName = 'BLOG';

	
	$scope.myTitle='';
	$scope.myBlog='';

	$scope.blogArray = [
							{title: "your title", blog:"asjdfa afsdkja asfdlkj"},
							{title: "sfa ", blog: " asdf afs fs"}
						]


	var goToPage1 = function() {
       $location.path('/view1'); 
    };

    var adding = function() {
    	$scope.blogArray.push({title: $scope.myTitle, blog: $scope.myBlog});

    }

    $scope.addThis = function() {
		adding();
    }

	$scope.submit = function () {
		goToPage1();
	};

}]);