'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2?:aaa', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope,$location) {
	
	    var cke = this;

        function onReady() {
            cke.loaded = true;
        }
        
        cke.loaded = false;
        cke.onReady = onReady;
        
        cke.options = {
            language: 'en',
            allowedContent: true,
            entities: false
        };
        
        cke.content = "<h1>Hello</h1>";
		
		$scope.$on('$destroy',function(){
			for(name in CKEDITOR.instances) {
				CKEDITOR.instances[name].destroy();
			}
		});
		
		$scope.proba = function () {
			$location.path('/view2?aaa=bbb');
		}

});