'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
	
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

});