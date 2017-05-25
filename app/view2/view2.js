
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html'
    });
}])

.controller('View2Ctrl', ['$scope', '$log', '$location', function($scope, $log, $location) {

	$scope.serialCount=0;
	$scope.myTitle='';
	$scope.myBlog='';

	$scope.blogArray = [
							{
								title: "Fresh move to impeach Justice Nagarjuna Reddy", 
								blog:"Over 60 members of the Rajya Sabha, cutting across party lines, have submitted a motion seeking initiation of impeachment proceedings against Justice C.V. Nagarjuna Reddy of the High Court for Andhra Pradesh and Telangana.This is the second attempt by members of the upper house of Parliament to remove Justice Nagarjuna Reddy after the first one made by 61 MPs on December 5 last year failed after 19 signatories withdrew. \n Allegations against the judge include interfering in the judicial process in several cases; and caste slurs including death threats against a Dalit Junior Civil Judge Sanku Rama Krishna at the courts in Rayachoti, a town in Andhra Pradesh’s Kadapa district. Rayachoti is also Justice Nagarjuna Reddy’s home town. \n Allegations against the judge include interfering in the judicial process in several cases; and caste slurs including death threats against a Dalit Junior Civil Judge Sanku Rama Krishna at the courts in Rayachoti, a town in Andhra Pradesh’s Kadapa district. Rayachoti is also Justice Nagarjuna Reddy’s home town.", 
								presentCount: $scope.serialCount++
							},

							{
								title: "Will Indian superstar Rajinikanth go into politics?",
								blog: 'Last week, India\'s Tamil cinema superstar, Rajinikanth, again made noises about joining politics. Speaking to his fans, the 66-year-old actor told them to be "ready for war" at the right time to take on the "corrupt" political system and a "rotten" democracy. "If God wills, I will enter politics tomorrow. If I do, I will be truthful and will not entertain the corrupt people," he said. "I\'d like to tell those who want me to enter politics for their personal benefit, don\'t be disappointed if I don\'t enter politics. At the same time, just in case if it happens, I will not even let such people near me." The political uncertainty in the southern state of Tamil Nadu has given new meaning to Rajinikanth\'s remarks and has led to heated televised debates.',
								presentCount: $scope.serialCount++
							},

							{
								title:"The glacier breaks apart and the pieces float away to sea",
								blog:"Watch the moment when Sir David Attenborough and BBC filmmakers recorded chunks of ice falling from a glacier. Even better, you can watch a further 1,000 more memorable moments, for free, anytime, on your smartphone or tablet, via Attenborough \'s Story of Life app, which is now available to download via Google Play",
								presentCount: $scope.serialCount++,
							},

							{
								title: "The storm only lasted minutes",
								blog: "The late 17th Century was a challenging time for the Netherlands. The Dutch found themselves in a war against several foreign forces, including the French and English. Boats in Amsterdam were plucked from the water and transported over several fields before crashing down The year 1672 in particular is an infamous one in Dutch history. It is known as the Disaster Year, because it marked an invasion of the Dutch Republic by forces from France, England and regions of what is now Germany. The French took all the money there was. Utrecht was left completely broke, says Gerard van der Schrier at the Royal Netherlands Meteorological Institute in De Bilt. The city was left uniquely ill-prepared for a major natural disaster. Which is unfortunate, given that two years later exactly such a disaster struck.",
								presentCount: $scope.serialCount++
							}
						]


	var goToPage1 = function() {
       $location.path('/view1'); 
    };

    var adding = function() {
    	$scope.serialCount++;
    	$scope.blogArray.push({title: $scope.myTitle, blog: $scope.myBlog, presentCount:$scope.serialCount});

    }

    $scope.addThis = function() {
		adding();
    }

	$scope.submit = function () {
		goToPage1();
	};

	$scope.removeIt = function(nowCount) {
		$scope.blogArray.splice(nowCount, 1);
	}

}]);