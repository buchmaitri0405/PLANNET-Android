var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {

      		var ref = new Firebase("https://resplendent-torch-7771.firebaseio.com/Testimonials");
            var a1 = $firebaseArray(ref);
			

           	 a1.$loaded().then(function (a1) {
                
				var len=0;
				
				angular.forEach(a1, function (value, key) {
                    len++;
					
				 });	
					//three unique random numbers
					var id1 = getRandomInt(0, len-1);
					var id2 = getRandomInt(0, len-1);
					 while (id2 == id1) {
					  id2 = getRandomInt(0, len-1);			
					   }						
					   var id3 = getRandomInt(0, len-1);
            		   while (id3 == id1 || id3 == id2) {
               			 id3 = getRandomInt(0, len-1);
            				}
						
						$scope.m = $firebaseArray(ref.child(id1));
						$scope.n = $firebaseArray(ref.child(id2));
						$scope.o = $firebaseArray(ref.child(id3));

               

            });
          

             function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
    }
]);