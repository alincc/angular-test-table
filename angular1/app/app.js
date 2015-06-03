angular.module('app', [])

	.config(['$compileProvider', function ($compileProvider) {
		if(angular.version.minor>2)
			$compileProvider.debugInfoEnabled(false);
	}])

    .controller('TestRendering', ['$rootScope', '$location', '$scope', 'TestService',
        function ($rootScope, $location, $scope, TestService) {

            $rootScope.$on('renderComplete', function (event, duration) {
                $scope.duration = duration;
                $scope.totalWatchers = TestService.countWatchers();
            });

            $scope.run = function (counter) {
                $scope.running = true;
                $scope.dataset = [];
                $scope.selectAllBtn = false;

                TestService.load(counter)
                    .success(function (response) {
                        TestService.setStart();
                        $scope.dataset = response;
                        $scope.running = false;
                    })
                    .error(function (e) {
                        $scope.running = false;
                        console.log(e);
                    });
            }

            $scope.isActive = function (route) {
                return $location.absUrl().endsWith(route);
            }

            $scope.selectAll = function () {
                angular.forEach($scope.dataset, function(item){
                    item.select = $scope.selectAllBtn;
                })
            }
        }])

    .service('TestService', ['$http', function ($http) {
        var startTime;

        this.getStart = function () {
            return startTime;
        }

        this.setStart = function () {
            startTime = new Date();
        }

        this.load = function (recCount) {
            return $http(
                {
                    url: '../data/' + recCount + '.json'//,
                    //params: { 'nocache': new Date().getTime() }
                });
        }

        this.countWatchers = function () {
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

    // Simple filter
    .filter('cf', function () {
        return function (input) {
            return input;
        };
    })


    // Directive detects when last row is rendered
    // http://tech.small-improvements.com/2013/09/10/angularjs-performance-with-large-lists/
    .directive('postRepeatDirective',
    ['$rootScope', '$timeout', '$log', 'TestService',
        function ($rootScope, $timeout, $log, TestService) {
            return function (scope, element, attrs) {
                if (scope.$last) {
                    $timeout(function () {
                        var ref = TestService.getStart();
                        var end = new Date();
                        var duration = end - ref;

                        $log.debug("## DOM rendering took: " + (end - ref) + " ms");

                        $rootScope.$emit('renderComplete', duration);
                    });
                }
            };
        }
    ]);

