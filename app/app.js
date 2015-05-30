angular.module('app', [])

.controller('TestRendering', ['$rootScope', '$location', '$scope', 'TestService', function($rootScope, $location, $scope, TestService){

	$rootScope.$on('renderComplete', function(e, d){
		$scope.duration = d;		
		$scope.totalWatchers = TestService.countWatchers();
	});
	
	$scope.run500 = function(){
		$scope.run(500);
	};
	
	$scope.run1500 = function(){
		$scope.run(1500);
	};
	
	$scope.run2500 = function(){
		$scope.run(2500);
	};
	
	$scope.run5000 = function(){
		$scope.run(5000);
	};
	
	$scope.run = function(counter){
		$scope.running = true;
        $scope.dataset = [];
		TestService.load(counter)
			.success(function(response){
				$scope.dataset = response;
				$scope.running = false;
			})
			.error(function(e){
				$scope.running = false;
				console.log(e);
			});
	}
	
	$scope.isActive = function(route) {
        return $location.absUrl().endsWith(route);
    }

}])

.service('TestService', ['$http', function($http){

	var startTime;
	
	this.getStart = function(){
		return startTime;
	}
	
	this.setStart = function(){
		startTime = new Date();
	}
	
	this.load = function(recCount)
	{	
		this.setStart();
		
		return $http(
		{
			url: 'data/' + recCount + '.json'//,
			//params: { 'nocache': new Date().getTime() }
		});
	}
	
	this.countWatchers = function(){
		var root = angular.element(document.getElementsByClassName('table'));
		var watchers = 0;

		var f = function (element) {
			if (element.data().hasOwnProperty('$scope')) {
				watchers += (element.data().$scope.$$watchers || []).length;
			}

			angular.forEach(element.children(), function (childElement) {
				f(angular.element(childElement));
			});
		};

		f(root);

		return watchers;
	}
}])

.filter('cf', function(){
	return function(input)
	{
		return input;
	};
})

// http://tech.small-improvements.com/2013/09/10/angularjs-performance-with-large-lists/
.directive('postRepeatDirective', 
  ['$rootScope', '$timeout', '$log',  'TestService', 
  function($rootScope, $timeout, $log, TestService) {
    return function(scope, element, attrs) {
      if (scope.$last){
         $timeout(function(){
             var ref = new Date(TestService.getStart());
             var end = new Date();
			 var duration = end-ref;
			 
             $log.debug("## DOM rendering list took: " + (end - ref) + " ms");
			 
			 $rootScope.$emit('renderComplete', duration);
         });
       }
    };
  }
]);

